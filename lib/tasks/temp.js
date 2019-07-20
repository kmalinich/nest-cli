const TaskClass = require('./base');


class TempTask extends TaskClass {
	run(device_id, mode, desired_temp, low) {
		let result;

		this.ui.startProgress('Setting thermostat mode and target temp');

		switch (mode.toLowerCase()) {
			case 'heat-cool' : result = this.app.api.thermostat.temp(device_id, desired_temp, low); break;
			case 'cool'      : result = this.app.api.thermostat.cool(device_id, desired_temp);      break;
			case 'heat'      : result = this.app.api.thermostat.heat(device_id, desired_temp);
		}

		return result.then((res) => {
			this.ui.stopProgress();
			console.dir(res);
		});
	}
}


module.exports = TempTask;
