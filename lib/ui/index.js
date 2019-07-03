const colors    = require('colors');
const Table     = require('cli-table');
const ConsoleUI = require('console-ui');


// function UI() {
// 	ConsoleUI.apply(this, arguments);
// }


UI = new ConsoleUI({
	inputStream  : process.stdin,
	outputStream : process.stdout,
	errorStream  : process.stderr,
	writeLevel   : 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR',
	ci           : true | false,
});


Object.assign(UI, {
//	startProgress(message) {
//		return UI.startProgress.call(this, message || '');
//	},

	color(color, string) {
		return colors[color](string);
	},

	createTable(options) {
		return new Table(options);
	},
});


module.exports = UI;
