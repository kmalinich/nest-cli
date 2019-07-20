const ConfigTask = require('../tasks/config');


module.exports = {
	name        : 'config <key> [value]',
	description : 'Get/set configuration options',

	run() {
		const task = new ConfigTask({
			app : this.app,
			ui  : this.ui,
		});

		return task.run.apply(this, arguments);
	},
};
