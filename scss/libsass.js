// Compile Bootstrap with [libsass][1] using [grunt-sass][2]
// [1]: https://github.com/sass/libsass
// [2]: https://github.com/sindresorhus/grunt-sass
module.exports = function configureLibsass(grunt) {
	var option = {
		includePaths: ['scss'],
		precision: 6,
		sourceComments: false,
		sourceMap: true,
		outputStyle: 'expanded'
	};
	var optionDist = {
		includePaths: ['scss'],
		precision: 6,
		sourceComments: false,
		sourceMap: false,
		outputStyle: 'compressed'
	};
	grunt.config.merge({
		sass: {
			style: {
				options: option,
				files: {
					'<%=pkg.distdir%>/css/app.css': './scss/app.scss'
				}
			},
			styledist: {
				options: optionDist,
				files: {
					'<%=pkg.distdir%>/css/app.min.css': './scss/app.scss'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-sass');
};
