module.exports = function(grunt) {
	// JS distribution task.
	grunt.registerTask('dist-js', [
		'dev-jsbs',
		'dev-jsswog',
		'uglify:bootstrap',
		'uglify:swog'
	]);
};
