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
  grunt.config.merge({
    sass: {
      bootstrap: {
        options: options,
        files: {
    			'<%=pkg.distdir%>/css/<%= pkg.framework.name %>.css': './scss/bs3/<%= pkg.framework.name %>.scss'
    		}
      },
      // extras: {
      //   options: options,
      //   files: {
      //     'dist/css/<%= pkg.name %>-flex.css': 'scss/<%= pkg.name %>-flex.scss',
      //     'dist/css/<%= pkg.name %>-grid.css': 'scss/<%= pkg.name %>-grid.scss',
      //     'dist/css/<%= pkg.name %>-reboot.css': 'scss/<%= pkg.name %>-reboot.scss'
      //   }
      // },
      swog: {
    		files: {
    			'<%=pkg.distdir%>/css/<%= pkg.name %>.css': './scss/swog/<%= pkg.name %>.scss'
    		}
    	}
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
};
