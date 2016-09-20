module.exports = {
	//beforeconcat: ['js/*.js']
	options: {
		// more options here if you want to override JSHint defaults

	},
	all: [
		'<%=devdir%>/js/*.js' //controllo solo quelli in questa radice perchè si suppone che le lib siano già OK
	]

};
