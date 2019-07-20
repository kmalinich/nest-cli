const UtilClass = require('./base');


class ReadIdUtil extends UtilClass {
	// Get either specifed structure ID, or the default structure ID
	structure(id = null, cb = null) {
		const { app } = this;

		if (typeof id !== 'string' || !id) {
			// id = 'hmj95uHoPy_3xaXbrbe3GEGDINXLc8uqBEpeE5nSx8cnpgEEkxiyfQ';
			id = app.config.get('DEFAULT_STRUCTURE');
		}

		if (!id) {
			throw new Error('Structure ID not specified');
		}

		typeof cb === 'function' && cb(id);
		cb = undefined;
	}

	// Get either specifed thermostat ID, or the default thermostat ID
	thermostat(id = null, cb = null) {
		const { app } = this;

		if (typeof id !== 'string' || !id) {
			id = app.config.get('DEFAULT_THERMOSTAT');
		}

		if (!id) {
			throw new Error('Thermostat ID not specified');
		}

		typeof cb === 'function' && cb(id);
		cb = undefined;
	}
}


module.exports = ReadIdUtil;
