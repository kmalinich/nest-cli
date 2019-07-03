/* eslint no-console : 0 */


class Device {
	constructor(api) {
		this.api       = api;
		this.tokens    = api.tokens;
		this.transport = api.transport;
	}

	index() {
		const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;

		if (typeof ACCESS_TOKEN === 'undefined') {
			console.error('Access token is missing - please login');
			process.exit();
		}
		const url = `/devices?auth=${ACCESS_TOKEN}`;

		return this.transport.get(this.api.rootUrl + url);
	}
}


module.exports = Device;
