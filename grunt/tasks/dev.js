module.exports = function(grunt) {
	grunt.registerTask('dev', [
		'dev-bscss',
		'dev-swogcss',
		'dev-jsbs',
		'dev-jsswog'
	]);
};
