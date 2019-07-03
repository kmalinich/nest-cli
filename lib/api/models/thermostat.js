const Model = require('./-base');

class Thermostat extends Model {
	static attrs() {
		const attr = this.attr;
		return {
			// Read-only properties
			id                  : attr('string',  { readOnly : true, alias : 'device_id' }),
			name                : attr('string',  { readOnly : true }),
			humidity            : attr('number',  { readOnly : true }),
			ambientTemperatureF : attr('number',  { readOnly : true }),
			hasLeaf             : attr('boolean', { readOnly : true }),
			canHeat             : attr('boolean', { readOnly : true }),
			canCool             : attr('boolean', { readOnly : true }),
			temperatureScale    : attr('string',  { readOnly : true }),
			softwareVersion     : attr('string',  { readOnly : true }),
			lastConnection      : attr('string',  { readOnly : true }),
			timeToTarget        : attr('string',  { readOnly : true }),
			isLocked            : attr('boolean', { readOnly : true }),
			isOnline            : attr('boolean', { readOnly : true }),

			// Writeable properties
			state                  : attr('string', { alias : 'hvac_state' }),
			mode                   : attr('string', { alias : 'hvac_mode' }),
			fanTimerActive         : attr('boolean'),
			targetTemperatureF     : attr('number'),
			targetTemperatureLowF  : attr('number'),
			targetTemperatureHighF : attr('number'),
			targetTemperatureC     : attr('number'),
			targetTemperatureLowC  : attr('number'),
			targetTemperatureHighC : attr('number'),
		};
	}
}

module.exports = Thermostat;
