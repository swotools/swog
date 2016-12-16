module.exports = function(grunt) {
	grunt.registerTask('dist', [
		'clean:dist',
		'babel:bsdev',
		'concat:bootstrap',
		'babel:bsdist',
		'stamp:bootstrap',
		'concat:swog',
		'stamp:swog',
		'sass:bootstrap',
		'sass:swog',
		'exec:postcss',
		'uglify:bootstrap',
		'uglify:swog',
		'cssmin:core'
]);
};
