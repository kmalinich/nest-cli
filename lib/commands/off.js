const SetStateTask = require('../tasks/state');
const ReadIdUtil   = require('../utils/read-id');


function run(thermostatId) {
	const task = new SetStateTask({
		app : this.app,
		ui  : this.ui,
	});

	const ReadId = new ReadIdUtil({
		app : this.app,
		ui  : this.ui,
	});

	return ReadId.thermostat(thermostatId, (read_thermostatId) => {
		return task.run(read_thermostatId, 'off');
	});
}


module.exports = {
	name        : 'off [thermostat-id]',
	description : 'Set thermostat mode to off',

	run : run,
};
