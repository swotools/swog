module.exports = function(grunt) {
	grunt.registerTask('dist-css', [
		'dev-bscss',
		'dev-swogcss',
		'cssmin:core'
	]);
};
