const TaskClass = require('./base');


class ReadThermostatTask extends TaskClass {
	run(thermostatId) {
		return this.app.api.thermostat.read(thermostatId).then((thermostat) => {
			const table_options = {
				chars : {
					'mid'       : '',
					'left-mid'  : '',
					'mid-mid'   : '',
					'right-mid' : '',
				},
				style : {
					'padding-left'  : 1,
					'padding-right' : 1,
				},
			};

			const table_data = {
				group_0 : [
					{ 'Name'           : thermostat.name            },
					{ 'ID'             : thermostat.id              },
					{ 'Online'         : thermostat.isOnline        },
					{ 'Last connected' : thermostat.lastConnection  },
					{ 'Software'       : thermostat.softwareVersion },
					{ 'Locked'         : thermostat.isLocked        },
				],

				group_1 : [
					{ 'Mode'  : thermostat.mode  },
					{ 'State' : thermostat.state },
				],

				group_2 : [
					{ 'Ambient temp'     : thermostat.ambientTemperatureF + '°F' },
					{ 'Ambient humidity' : thermostat.humidity            + '%'  },
				],

				group_3 : [
					{ 'Target'      : thermostat.targetTemperatureF     + '°F'   },
					{ 'Target low'  : thermostat.targetTemperatureLowF  + '°F'   },
					{ 'Target high' : thermostat.targetTemperatureHighF + '°F'   },
					{ 'Target ETA'  : thermostat.timeToTarget           + ' min' },
				],
			};


			let table;

			table = this.ui.createTable(table_options);
			table.push.apply(table, table_data.group_0);
			this.ui.writeLine(table);

			table = this.ui.createTable(table_options);
			table.push.apply(table, table_data.group_1);
			this.ui.writeLine(table);

			table = this.ui.createTable(table_options);
			table.push.apply(table, table_data.group_2);
			this.ui.writeLine(table);

			table = this.ui.createTable(table_options);
			table.push.apply(table, table_data.group_3);
			this.ui.writeLine(table);


			return thermostat;
		});
	}
}


module.exports = ReadThermostatTask;
