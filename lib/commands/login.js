const LoginTask = require('../tasks/login');


module.exports = {
	name        : 'login',
	description : 'Log in to Nest account',

	run(pin) {
		const task = new LoginTask({
			app : this.app,
			ui  : this.ui,
		});

		return task.run(pin);
	},
};
