const LogoutTask = require('../tasks/logout');


module.exports = {
	name        : 'logout',
	description : 'Log out of Nest account',

	isVisible(app) {
		return !!app.config.get('ACCESS_TOKEN');
	},

	run(pin) {
		const task = new LogoutTask({
			app : this.app,
			ui  : this.ui,
		});

		return task.run(pin);
	},
};
