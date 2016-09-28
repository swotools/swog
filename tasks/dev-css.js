module.exports = function(grunt) {
	grunt.registerTask('dev-css', ['sass-compile', 'exec:postcss']);
};
