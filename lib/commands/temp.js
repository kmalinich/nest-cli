const TempTask   = require('../tasks/temp');
const ReadIdUtil = require('../utils/read-id');


function run(mode, temp, thermostatId) {
	const task = new TempTask({
		app : this.app,
		ui  : this.ui,
	});

	const ReadId = new ReadIdUtil({
		app : this.app,
		ui  : this.ui,
	});

	return ReadId.thermostat(thermostatId, (read_thermostatId) => {
		return task.run(read_thermostatId, mode, temp);
	});
}


module.exports = {
	name        : 'temp <mode> <temp> [thermostatId]',
	description : 'Set thermostat mode and target temperature',
	options     : [ 'modes: cool, heat, heat-cool' ],

	run : run,
};
