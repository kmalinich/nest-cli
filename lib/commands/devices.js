const DevicesTask = require('../tasks/devices');


module.exports = {
	name        : 'devices',
	description : 'List available devices',
	options     : [ '-v, --verbose  Output raw response' ],

	run(options) {
		const task = new DevicesTask({
			app : this.app,
			ui  : this.ui,
		});

		return task.run({
			verbose : options.verbose,
		});
	},
};
