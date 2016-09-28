module.exports = function(grunt) {
	// JS distribution task.
	grunt.registerTask('dev-js', ['babel:bsdev', 'concat:bootstrap', 'concat:swog', 'babel:bsdist', 'stamp:bootstrap', 'stamp:swog']);
};
