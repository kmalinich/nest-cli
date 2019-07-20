const colors    = require('colors');
const Table     = require('cli-table-redemption');
const ConsoleUI = require('console-ui');


// 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR'
function get_write_level() {
	switch (process.env.NODE_ENV) {
		case 'development' : return 'DEBUG';
	}

	return 'INFO';
}


UI = new ConsoleUI({
	ci : false,

	errorStream  : process.stderr,
	inputStream  : process.stdin,
	outputStream : process.stdout,

	writeLevel : get_write_level(),
});


Object.assign(UI, {
	color(color, string) { return colors[color](string); },

	createTable(options) { return new Table(options); },
});


module.exports = UI;
