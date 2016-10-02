module.exports = function(grunt) {
	grunt.registerTask('dev', [
		'dev-jsbs',
		'dev-jsswog',
		'dev-bscss',
		'dev-swogcss'
	]);
};
