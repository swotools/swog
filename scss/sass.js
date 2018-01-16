// Compile Bootstrap with [Ruby Sass][1] using [grunt-contrib-sass][2]
// [1]: https://github.com/sass/sass
// [2]: https://github.com/gruntjs/grunt-contrib-sass
module.exports = function configureRubySass(grunt) {
	var options = {
		loadPath: ['scss'],
		precision: 6,
		sourcemap: 'auto',
		style: 'expanded',
		trace: true,
		bundleExec: true
	};
	var optionsDist = {
		loadPath: ['scss'],
		precision: 6,
		sourcemap: 'false',
		style: 'compressed',
		trace: false,
		bundleExec: true
	};
	grunt.config.merge({
		sass: {
			style: {
				options: options,
				files: {
					'<%=pkg.distdir%>/css/app.css': './scss/app.scss'
				}
			},
			styledist: {
				options: optionsDist,
				files: {
					'<%=pkg.distdir%>/css/app.min.css': './scss/app.scss'
				}
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
};
