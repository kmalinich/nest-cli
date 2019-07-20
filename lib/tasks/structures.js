const TaskClass = require('./base');


class StructuresTask extends TaskClass {
	constructor(options) {
		super(options);

		this.table = this.ui.createTable({
			head : [ 'ID', 'Name', 'Thermostats', 'Smoke alarms', 'Away' ].map((heading) => {
				return this.ui.color('blue', heading);
			}),
		});
	}

	run(options) {
		const ui    = this.ui;
		const table = this.table;

		ui.startProgress('Querying Nest API for structures');

		return this.app.api.structure.index().then((res) => {
			ui.stopProgress();

			if (options.verbose) console.dir(res);

			Object.keys(res).map((key) => {
				return res[key];
			}).map((structure) => {
				let len_thermostats     = 0;
				let len_smoke_co_alarms = 0;

				if (typeof structure.thermostats !== 'undefined') {
					len_thermostats = structure.thermostats.length;
				}

				if (typeof structure.smoke_co_alarms !== 'undefined') {
					len_smoke_co_alarms = structure.smoke_co_alarms.length;
				}

				return [
					structure.structure_id,
					structure.name,
					len_thermostats,
					len_smoke_co_alarms,
					structure.away,
				];
			}).forEach((structure) => {
				table.push(structure);
			});

			ui.writeLine(table);
		});
	}
}


module.exports = StructuresTask;
