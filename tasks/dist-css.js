module.exports = function(grunt) {
	grunt.registerTask('dist-css', ['sass-compile', 'exec:postcss', 'cssmin:core', 'cssmin:dist']);
};
