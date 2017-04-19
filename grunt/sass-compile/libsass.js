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
			bootstrap: {
				options: option,
				files: {
					'<%=pkg.distdir%>/css/<%= pkg.framework.name %>.css': './scss/bs3/<%= pkg.framework.name %>.scss'
				}
			},
			swog: {
				options: option,
				files: {
					'<%=pkg.distdir%>/css/<%= pkg.name %>.css': './scss/swog/<%= pkg.name %>.scss'
				}
				// extras: {
				//   files: {
				//     'dist/css/<%= pkg.name %>-flex.css': 'scss/<%= pkg.name %>-flex.scss',
				//     'dist/css/<%= pkg.name %>-grid.css': 'scss/<%= pkg.name %>-grid.scss',
				//     'dist/css/<%= pkg.name %>-reboot.css': 'scss/<%= pkg.name %>-reboot.scss'
				//   }
				// },
			},
			bootstrapdist: {
				options: optionDist,
				files: {
					'<%=pkg.distdir%>/css/<%= pkg.framework.name %>.min.css': './scss/bs3/<%= pkg.framework.name %>.scss'
				}
			},
			swogdist: {
				options: optionDist,
				files: {
					'<%=pkg.distdir%>/css/<%= pkg.name %>.min.css': './scss/swog/<%= pkg.name %>.scss'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-sass');
};
