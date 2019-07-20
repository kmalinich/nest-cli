const fetch = require('./utils/fetch');


class Adapter {
	get(url) {
		return fetch(url, {
			method : 'GET',
		});
	}

	post(url, optionalBody, optionalHeaders) {
		let body    = optionalBody;
		let headers = optionalHeaders;

		if (!body)            body    = {};
		if (!optionalHeaders) headers = {};

		let fetch_options = {
			method   : 'POST',
			body     : JSON.stringify(body),
			compress : true,
			headers,
		};

		return fetch(url, fetch_options);
	}

	put(url, optionalBody, optionalHeaders) {
		let body    = optionalBody;
		let headers = optionalHeaders;

		if (!body)            body    = {};
		if (!optionalHeaders) headers = {};

		let fetch_options = {
			method   : 'PUT',
			body     : JSON.stringify(body),
			compress : true,
			headers,
		};

		return fetch(url, fetch_options);
	}
}


module.exports = Adapter;
