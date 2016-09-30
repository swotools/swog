module.exports = function(grunt) {
	grunt.registerTask('dist', [
		'dev-jsbs',
		'dev-jsswog',
		'dev-bscss',
		'dev-swogcss'
	]);
};
