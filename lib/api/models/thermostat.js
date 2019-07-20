const Model = require('./base');


class Thermostat extends Model {
	static attrs() {
		const attr = this.attr;

		// Available 'thermostat' device properties
		// {
		//   ambient_temperature_c: 22,
		//   ambient_temperature_f: 72,
		//
		//   away_temperature_high_c: 29.5,
		//   away_temperature_high_f: 86,
		//   away_temperature_low_c: 17,
		//   away_temperature_low_f: 63,
		//
		//   can_cool: true,
		//   can_heat: true,
		//
		//   device_id: '43zmbsJcn_uAX2giyV--3VLPH174NO0P',
		//
		//   eco_temperature_high_c: 29.5,
		//   eco_temperature_high_f: 86,
		//   eco_temperature_low_c: 17,
		//   eco_temperature_low_f: 63,
		//
		//   fan_timer_active: true,
		//   fan_timer_duration: 480,
		//   fan_timer_timeout: '1970-01-01T00:00:00.000Z',
		//
		//   has_fan: true,
		//   has_leaf: false,
		//
		//   humidity: 60,
		//
		//   hvac_mode: 'cool',
		//   hvac_state: 'cooling',
		//
		//   is_locked: false,
		//   is_online: true,
		//   is_using_emergency_heat: false,
		//
		//   label: 'hallway',
		//
		//   last_connection: '2019-07-20T16:16:52.777Z',
		//
		//   locale: 'en-US',
		//
		//   locked_temp_max_c: 23,
		//   locked_temp_max_f: 74,
		//   locked_temp_min_c: 20.5,
		//   locked_temp_min_f: 69,
		//
		//   name: 'z1 (hallway)',
		//   name_long: 'z1 Thermostat (hallway)',
		//
		//   previous_hvac_mode: '',
		//
		//   software_version: '5.9.3-6',
		//
		//   structure_id: 'hmj95uHoPy_3xaXbrbe3GEGDINXLc8uqBEpeE5nSx8cnpgEEkxiyfQ',
		//
		//   sunlight_correction_active: false,
		//   sunlight_correction_enabled: true,
		//
		//   target_temperature_c: 22,
		//   target_temperature_f: 72,
		//   target_temperature_high_c: 24,
		//   target_temperature_high_f: 75,
		//   target_temperature_low_c: 20,
		//   target_temperature_low_f: 68,
		//
		//   temperature_scale: 'F',
		//
		//   time_to_target: '~0',
		//   time_to_target_training: 'ready',
		//
		//   where_id: 'hPvO7pzcP6lcOmjZDZlmHHSjFuEExNgwr4v39o2fNqKpQsQw8bpg_w',
		//
		//   where_name: 'z1',
		// }

		return {
			// Translate underscore_properties to camelCase (because..?)
			ambientTemperatureC       : attr('number',  { readOnly : true }),
			ambientTemperatureF       : attr('number',  { readOnly : true }),
			awayTemperatureHighC      : attr('number',  { readOnly : true }),
			awayTemperatureHighF      : attr('number',  { readOnly : true }),
			awayTemperatureLowC       : attr('number',  { readOnly : true }),
			awayTemperatureLowF       : attr('number',  { readOnly : true }),
			canCool                   : attr('boolean', { readOnly : true }),
			canHeat                   : attr('boolean', { readOnly : true }),
			ecoTemperatureHighC       : attr('number',  { readOnly : true }),
			ecoTemperatureHighF       : attr('number',  { readOnly : true }),
			ecoTemperatureLowC        : attr('number',  { readOnly : true }),
			ecoTemperatureLowF        : attr('number',  { readOnly : true }),
			fanTimerTimeout           : attr('string',  { readOnly : true }),
			hasFan                    : attr('boolean', { readOnly : true }),
			hasLeaf                   : attr('boolean', { readOnly : true }),
			humidity                  : attr('number',  { readOnly : true }),
			isLocked                  : attr('boolean', { readOnly : true }),
			isOnline                  : attr('boolean', { readOnly : true }),
			isUsingEmergencyHeat      : attr('boolean', { readOnly : true }),
			label                     : attr('string',  { readOnly : true }),
			lastConnection            : attr('string',  { readOnly : true }),
			locale                    : attr('string',  { readOnly : true }),
			lockedTemperatureMaxC     : attr('number',  { readOnly : true }),
			lockedTemperatureMaxF     : attr('number',  { readOnly : true }),
			lockedTemperatureMinC     : attr('number',  { readOnly : true }),
			lockedTemperatureMinF     : attr('number',  { readOnly : true }),
			name                      : attr('string',  { readOnly : true }),
			nameLong                  : attr('string',  { readOnly : true }),
			softwareVersion           : attr('string',  { readOnly : true }),
			structureId               : attr('string',  { readOnly : true }),
			sunlightCorrectionActive  : attr('boolean', { readOnly : true }),
			sunlightCorrectionEnabled : attr('boolean', { readOnly : true }),
			targetTemperatureHighC    : attr('number',  { readOnly : true }),
			targetTemperatureHighF    : attr('number',  { readOnly : true }),
			targetTemperatureLowC     : attr('number',  { readOnly : true }),
			targetTemperatureLowF     : attr('number',  { readOnly : true }),
			temperatureScale          : attr('string',  { readOnly : true }),
			timeToTarget              : attr('string',  { readOnly : true }),
			timeToTargetTraining      : attr('string',  { readOnly : true }),
			whereId                   : attr('string',  { readOnly : true }),
			whereName                 : attr('string',  { readOnly : true }),

			// Writable
			fanTimerActive     : attr('boolean'),
			fanTimerDuration   : attr('number'),
			targetTemperatureC : attr('number'),
			targetTemperatureF : attr('number'),

			// Keys with alias (camelCase conversion or key name overridden)
			id           : attr('string', { alias : 'device_id', readOnly : true }),
			mode         : attr('string', { alias : 'hvac_mode'                  }),
			modePrevious : attr('string', { alias : 'previous_hvac_mode'         }),
			state        : attr('string', { alias : 'hvac_state'                 }),
		};
	}
}


module.exports = Thermostat;
