module.exports = function(grunt) {
	grunt.registerTask('dist', [
		'dev',
		'uglify:bootstrap',
		'uglify:swog',
		'cssmin:core'
]);
};
