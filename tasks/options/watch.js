module.exports = {

	js: {
		files: 'js/**/*.js',
		tasks: ['dist-js']
	},
	css: {
		files: 'scss/**/*.scss',
		tasks: ['dist-css', 'copy:pubcss']
	},
	swogcss: {
		files: 'scss/swog/*.scss',
		tasks: ['sass:swog','exec:postcss']
	}
};
