const ConfigTask = require('../tasks/config');


module.exports = {
	name        : 'default-thermostat <thermostat-id>',
	description : 'Set default thermostat ID',

	run(thermostatId) {
		const task = new ConfigTask({
			app : this.app,
			ui  : this.ui,
		});

		return task.run('DEFAULT_THERMOSTAT', thermostatId);
	},
};
