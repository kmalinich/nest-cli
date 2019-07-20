const TaskClass = require('./base');


class DevicesTask extends TaskClass {
	alarmTable(alarms) {
		const { t } = this.app;
		const h     = t.table_headers;

		const table = this.ui.createTable({
			head : [ h.id, h.name, h.battery_health, h.smoke_state, h.co_state, h.online ].map((heading) => {
				return this.ui.color('green', heading);
			}),
		});

		Object.keys(alarms).map((key) => {
			return alarms[key];
		}).map((alarm) => {
			return [
				alarm.device_id,
				alarm.name,
				alarm.battery_health,
				alarm.smoke_alarm_state,
				alarm.co_alarm_state,
				alarm.is_online,
			];
		}).forEach((alarm) => {
			table.push(alarm);
		});

		this.ui.writeLine(table);
	}

	thermostatTable(thermostats) {
		const { t } = this.app;
		const h     = t.table_headers;

		const table = this.ui.createTable({
			head : [
				h.id,
				h.name,
				h.state,
				h.mode,
				h.humidity,
				h.target_temperature,
				h.target_temperature_low,
				h.target_temperature_high,
			].map((heading) => {
				return this.ui.color('green', heading);
			}),
		});

		Object.keys(thermostats).map((key) => {
			return thermostats[key];
		}).map((thermostat) => {
			return [
				thermostat.device_id,
				thermostat.name,
				thermostat.hvac_state,
				thermostat.hvac_mode,
				thermostat.humidity,
				thermostat.target_temperature_f,
				thermostat.target_temperature_low_f,
				thermostat.target_temperature_high_f,
			];
		}).forEach((thermostat) => {
			table.push(thermostat);
		});

		this.ui.writeLine(table);
	}


	run(options) {
		this.ui.startProgress('Querying Nest API for devices');

		return this.app.api.device.index().then((res) => {
			this.ui.stopProgress();

			if (options.verbose) console.dir(res);

			if (res.thermostats)     this.thermostatTable(res.thermostats);
			if (res.smoke_co_alarms) this.alarmTable(res.smoke_co_alarms);
		});
	}
}


module.exports = DevicesTask;
