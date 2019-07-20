const AwayTask   = require('../tasks/away');
const ReadIdUtil = require('../utils/read-id');


function run(mode, structureId) {
	const ReadId = new ReadIdUtil({
		app : this.app,
		ui  : this.ui,
	});

	const task = new AwayTask({
		app : this.app,
		ui  : this.ui,
	});

	return ReadId.structure(structureId, (read_structureId) => {
		return task.run(read_structureId, mode);
	});
}


module.exports = {
	name        : 'away <mode> [structure-id]',
	description : 'Set away mode',
	options     : [ 'modes: home, away, auto-away, unknown' ],

	run : run,
};
