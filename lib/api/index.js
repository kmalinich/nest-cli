const Transport = require('./transport');

const Device     = require('./device');
const Structure  = require('./structure');
const Thermostat = require('./thermostat');


class api {
	constructor(PRODUCT_ID, PRODUCT_SECRET, ACCESS_TOKEN) {
		this.tokens = {
			ACCESS_TOKEN,
			PRODUCT_ID,
			PRODUCT_SECRET,
		};

		this.rootUrl = 'https://developer-api.nest.com';

		// Transport must be instantiated before Device, Structure, or Thermostat
		this.transport = new Transport();

		this.thermostat = new Thermostat(this);
		this.device     = new Device(this);
		this.structure  = new Structure(this);
	}
}


module.exports = api;
