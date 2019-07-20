const TaskClass = require('./base');


class AwayTask extends TaskClass {
	run(structureId, mode) {
		const ui = this.ui;

		if (typeof mode === 'undefined' || typeof structureId === 'undefined') {
			ui.writeLine('Mode and structure ID are required');
			return;
		}

		return this.app.api.structure.away(structureId, mode).then((res) => {
			ui.writeLine('Mode set to: ' + res.away);
		});
	}
}


module.exports = AwayTask;
