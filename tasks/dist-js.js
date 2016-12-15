module.exports = function(grunt) {
	// JS distribution task.
	grunt.registerTask('dist-js', ['babel:bsdev', 'concat:bootstrap', 'babel:bsdist', 'stamp:bootstrap', 'uglify:bootstrap', 'concat:swog', 'stamp:swog', 'uglify:swog']);
};
