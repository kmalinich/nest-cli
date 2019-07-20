const SetStateTask = require('../tasks/state');
const ReadIdUtil   = require('../utils/read-id');


function run(mode, thermostatId) {
	const task = new SetStateTask({
		app : this.app,
		ui  : this.ui,
	});

	const ReadId = new ReadIdUtil({
		app : this.app,
		ui  : this.ui,
	});

	return ReadId.thermostat(thermostatId, (read_thermostatId) => {
		return task.run(read_thermostatId, mode);
	});
}


module.exports = {
	name        : 'mode <mode> [thermostat-id]',
	description : 'Set thermostat mode',
	options     : [ 'modes: off, cool, heat, heat-cool' ],

	run : run,
};
