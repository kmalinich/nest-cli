'use strict';

const TaskClass = require('./-base');

class ReadThermostatTask extends TaskClass {
  run(deviceId) {
		const table_options = {
			chars : {
				'mid'       : '',
				'left-mid'  : '',
				'mid-mid'   : '',
				'right-mid' : ''
			},
      style : {
        'padding-left'  : 0,
        'padding-right' : 0,
      },
		};

    const ui    = this.ui;
    const api   = this.app.api;
    const table = this.ui.createTable(table_options);

    return api.thermostat.read(deviceId).then((thermostat) => {
      table.push(
        { 'Name'      : thermostat.name                          },
        { 'ID'        : thermostat.id                            },
        { 'Sw Vers'   : thermostat.softwareVersion               },
        { 'Locked'    : thermostat.isLocked                      },
        { 'Online'    : thermostat.isOnline                      },
        { 'LastConn'  : thermostat.lastConnection                },
        { 'State'     : thermostat.state                         },
        { 'Mode'      : thermostat.mode                          },
        { 'Humidity'  : thermostat.humidity               + '%'  },
        { 'Ambient'   : thermostat.ambientTemperatureF    + '°F' },
        { 'Target'    : thermostat.targetTemperatureF     + '°F' },
        { 'Target Lo' : thermostat.targetTemperatureLowF  + '°F' },
        { 'Target Hi' : thermostat.targetTemperatureHighF + '°F' },
        { 'Time2Tgt'  : thermostat.timeToTarget                  },
      );

      ui.writeLine(table);

      return thermostat;
    });
  }
}

module.exports = ReadThermostatTask;
