module.exports = function(grunt) {
	grunt.registerTask('dist', ['clean:dist', 'dist-css', 'dist-js']);
};
