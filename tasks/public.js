module.exports = function(grunt) {
	grunt.registerTask('public', ['copy:pubcss', 'copy:pubjs']);
};
