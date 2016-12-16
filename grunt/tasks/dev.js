module.exports = function(grunt) {
	grunt.registerTask('dev', [
		'clean:bsjs',
		'babel:bsdev',
		'concat:bootstrap',
		'babel:bsdist',
		'stamp:bootstrap',
		'clean:swogjs',
		'concat:swog',
		'stamp:swog',
		'clean:bscss',
		'sass:bootstrap',
		'clean:swogcss',
		'sass:swog',
		'exec:postcss'
	]);
};
