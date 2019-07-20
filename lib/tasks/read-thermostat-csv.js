const TaskClass = require('./base');


class ReadThermostatCSVTask extends TaskClass {
	run(deviceId) {
		return this.app.api.thermostat.read(deviceId).then((thermostat) => {
			let date_format = require('dateformat')('isoDateTime');
			console.log(date_format +
				',' + thermostat.softwareVersion +
				',' + thermostat.lastConnection +
				',' + thermostat.isOnline +
				',' + thermostat.canCool +
				',' + thermostat.canHeat +
				',' + thermostat.hasFan +
				',' + thermostat.hasLeaf +
				',' + thermostat.isLocked +
				',' + thermostat.isUsingEmergencyHeat +
				',' + thermostat.sunlightCorrectionActive +
				',' + thermostat.sunlightCorrectionEnabled +
				',' + thermostat.fanTimerActive +
				',' + thermostat.fanTimerDuration +
				',' + thermostat.fanTimerTimeout +
				',' + thermostat.mode +
				',' + thermostat.modePrevious +
				',' + thermostat.state +
				',' + thermostat.humidity +
				',' + thermostat.ambientTemperatureC +
				',' + thermostat.targetTemperatureC +
				',' + thermostat.targetTemperatureHighC +
				',' + thermostat.targetTemperatureLowC +
				',' + thermostat.ecoTemperatureHighC +
				',' + thermostat.ecoTemperatureLowC +
				',' + thermostat.awayTemperatureHighC +
				',' + thermostat.awayTemperatureLowC +
				',' + thermostat.lockedTemperatureMaxC +
				',' + thermostat.lockedTemperatureMinC +
				',' + thermostat.timeToTarget +
				',' + thermostat.timeToTargetTraining
			);

			return thermostat;
		});
	}
}


module.exports = ReadThermostatCSVTask;
