const ReadThermostatTask = require('../tasks/read-thermostat');
const ReadIdUtil         = require('../utils/read-id');


function run(thermostatId) {
	const task = new ReadThermostatTask({
		app : this.app,
		ui  : this.ui,
	});

	const ReadId = new ReadIdUtil({
		app : this.app,
		ui  : this.ui,
	});

	return ReadId.thermostat(thermostatId, (read_thermostatId) => {
		return task.run(read_thermostatId);
	});
}


module.exports = {
	name        : 'read [thermostat-id]',
	description : 'Display thermostat data',

	run : run,
};
