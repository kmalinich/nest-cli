/* eslint no-console : 0 */

const nodeFetch = require('node-fetch');


let check_status = function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response.json();
	}

	const error = new Error(response.statusText);
	error.response = response;
	throw error;
};


function fetch(url, options) {
	return nodeFetch(url, options)
		.then(check_status)
		.catch((error) => {
			console.log('Promise rejection');
			return error;
		});
}

module.exports = fetch;
