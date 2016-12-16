// Compile Bootstrap with [libsass][1] using [grunt-sass][2]
// [1]: https://github.com/sass/libsass
// [2]: https://github.com/sindresorhus/grunt-sass
module.exports = function configureLibsass(grunt) {
  grunt.config.merge({
    sass: {
      options: {
        includePaths: ['scss'],
        precision: 6,
        sourceComments: false,
        sourceMap: true,
        outputStyle: 'expanded'
      },
      bootstrap: {
        files: {
    			'<%=pkg.distdir%>/css/<%= pkg.framework.name %>.css': './scss/bs4/<%= pkg.framework.name %>.scss'
    		}
      },
      extras: {
        files: {
          'dist/css/<%= pkg.name %>-flex.css': 'scss/<%= pkg.name %>-flex.scss',
          'dist/css/<%= pkg.name %>-grid.css': 'scss/<%= pkg.name %>-grid.scss',
          'dist/css/<%= pkg.name %>-reboot.css': 'scss/<%= pkg.name %>-reboot.scss'
        }
      },
      swog: {
    		files: {
    			'<%=pkg.distdir%>/css/<%= pkg.name %>.css': './scss/swog/<%= pkg.name %>.scss'
    		}
    	}

    }
  });
  grunt.loadNpmTasks('grunt-sass');
};
