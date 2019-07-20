const StructuresTask = require('../tasks/structures');

module.exports = {
	name        : 'structures',
	description : 'List available structures',
	options     : [ '-v, --verbose  Output raw response' ],

	run(options) {
		const task = new StructuresTask({
			app : this.app,
			ui  : this.ui,
		});

		return task.run({
			verbose : options.verbose,
		});
	},
};
