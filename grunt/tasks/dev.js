module.exports = function(grunt) {
	grunt.registerTask('dev', [
		'dev-jsbs','stamp:bootstrap',
		'dev-jsswog', 'stamp:swog',
		'dev-bscss',
		'dev-swogcss',
		'exec:postcss'
	]);
};
