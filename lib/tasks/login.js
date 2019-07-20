const open      = require('open');
const TaskClass = require('./base');
const server    = require('../auth/server');


class LoginTask extends TaskClass {
	calculateExpirery(seconds) {
		let d = new Date();
		d.setSeconds(d.getSeconds() + seconds);

		return d.toISOString();
	}

	run() {
		const { app, ui } = this;

		const PRODUCT_ID     = app.config.get('PRODUCT_ID');
		const PRODUCT_SECRET = app.config.get('PRODUCT_SECRET');

		// Create a local webserver for nest for authentication
		return server(3000, { PRODUCT_ID, PRODUCT_SECRET }).then((user) => {
			open('http://localhost:3000/auth/nest');

			ui.writeLine(ui.color('green', 'Successfully logged in'));

			app.config.set('ACCESS_TOKEN', user.accessToken);

			process.exit(0);
		}).catch((ex) => {
			// ui.writeError(ex && ex.message || ex);
			ui.writeError(ex);
			process.exit(1);
		});
	}
}


module.exports = LoginTask;
