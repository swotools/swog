module.exports = function(grunt) {
	grunt.registerTask('dist', [
		'dev',
		'uglify:dist',
		'cssmin:core',
		'cssmin:dist'
]);
};
