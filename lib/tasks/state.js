const TaskClass = require('./base');


class StateTask extends TaskClass {
	run(id, state) {
		return this.app.api.thermostat.state(id, state).then((res) => {
			console.dir(res);
		});
	}
}


module.exports = StateTask;
