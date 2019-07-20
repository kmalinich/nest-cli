const ReadThermostatCSVTask = require('../tasks/read-thermostat-csv');
const ReadIdUtil            = require('../utils/read-id');


function run(thermostatId) {
	const task = new ReadThermostatCSVTask({
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
	name        : 'read-csv [thermostat-id]',
	description : 'Display thermostat data in CSV format',

	run : run,
};
