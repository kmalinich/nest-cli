const ConfigTask = require('../tasks/config');


module.exports = {
	name        : 'default-structure <structure-id>',
	description : 'Set default structure ID',

	run(structureId) {
		const task = new ConfigTask({
			app : this.app,
			ui  : this.ui,
		});

		return task.run('DEFAULT_STRUCTURE', structureId);
	},
};
