module.exports = function(grunt) {
	// JS distribution task.
	grunt.registerTask('dist-js', ['babel:bsdev', 'concat:bootstrap', 'concat:swog', 'babel:bsdist', 'stamp:bootstrap', 'stamp:swog', 'uglify:bootstrap', 'uglify:swog']);
};
