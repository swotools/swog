module.exports = function(grunt) {
  'use strict';
  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function(string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  // Utility to load the different option files
  // function loadConfig(path) {
  // 	var glob = require('glob');
  // 	var object = {};
  // 	var key;
  //
  // 	glob.sync('*', {
  // 		cwd: path
  // 	}).forEach(function(option) {
  // 		key = option.replace(/\.js$/, '');
  // 		object[key] = require(path + option);
  // 	});
  //
  // 	return object;
  // }

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
      ' * SWOG v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
      ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' */\n',
    bsbanner: '/*!\n' +
      ' * Bootstrap v<%= pkg.framework.version %> (<%= pkg.framework.homepage %>)\n' +
      ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.framework.author %>\n' +
      ' * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n' +
      ' */\n',
    jqueryCheck: 'if (typeof jQuery === \'undefined\') {\n' +
      '  throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\\\'s JavaScript.\')\n' +
      '}\n',
    jqueryVersionCheck: '+function ($) {\n' +
      '  var version = $.fn.jquery.split(\' \')[0].split(\'.\')\n' +
      '  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {\n' +
      '    throw new Error(\'Bootstrap\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\')\n' +
      '  }\n' +
      '}(jQuery);\n\n',


    clean: {
      dist: '<%=pkg.distdir%>',
      swogcss: {
        src: [
          "<%=pkg.distdir%>/css/swog*"
        ]
      },
      bscss: {
        src: [
          "<%=pkg.distdir%>/css/bootstrap*"
        ]
      },
      bsjs: {
        src: [
          "<%=pkg.distdir%>/js/bootstrap*"
        ]
      },
      swogjs: {
        src: [
          "<%=pkg.distdir%>/js/swog*"
        ]
      }
    },
    // JS build configuration
    babel: {
      dev: {
        options: {
          sourceMap: true
        },
        files: {
          'js/bs4/dist/util.js': 'js/bs4/src/util.js',
          'js/bs4/dist/alert.js': 'js/bs4/src/alert.js',
          'js/bs4/dist/button.js': 'js/bs4/src/button.js',
          'js/bs4/dist/carousel.js': 'js/bs4/src/carousel.js',
          'js/bs4/dist/collapse.js': 'js/bs4/src/collapse.js',
          'js/bs4/dist/dropdown.js': 'js/bs4/src/dropdown.js',
          'js/bs4/dist/modal.js': 'js/bs4/src/modal.js',
          'js/bs4/dist/scrollspy.js': 'js/bs4/src/scrollspy.js',
          'js/bs4/dist/tab.js': 'js/bs4/src/tab.js',
          'js/bs4/dist/tooltip.js': 'js/bs4/src/tooltip.js',
          'js/bs4/dist/popover.js': 'js/bs4/src/popover.js'
        }
      },
      dist: {
        options: {
          extends: '../../../js/.babelrc'
        },
        files: {
          '<%= concat.bootstrap.dest %>': '<%= concat.bootstrap.dest %>'
        }
      }
    },
    stamp: {
      bootstrap: {
        options: {
          banner: '<%= bsbanner %>\n<%= jqueryCheck %>\n<%= jqueryVersionCheck %>\n+function () {\n',
          footer: '\n}();'
        },
        files: {
          src: '<%= concat.bootstrap.dest %>'
        }
      },
      swog: {
        options: {
          banner: '<%= banner %>\n',
        },
        files: {
          src: '<%= concat.swog.dest %>'
        }
      }
    },
    concat: {
      options: {
        // Custom function to remove all export and import statements
        process: function(src) {
          return src.replace(/^(export|import).*/gm, '');
        }
      },
      bootstrap: {
        src: [
          'js/bs4/src/util.js',
          'js/bs4/src/alert.js',
          'js/bs4/src/button.js',
          'js/bs4/src/carousel.js',
          'js/bs4/src/collapse.js',
          'js/bs4/src/dropdown.js',
          'js/bs4/src/modal.js',
          'js/bs4/src/scrollspy.js',
          'js/bs4/src/tab.js',
          'js/bs4/src/tooltip.js',
          'js/bs4/src/popover.js'
        ],
        dest: '<%=pkg.distdir%>/js/<%= pkg.framework.name %>.js'
      },
      swog: {
        src: [
          'js/swog/general.js'
        ],
        dest: '<%=pkg.distdir%>/js/<%= pkg.name %>.js'
      }
    },
    watch: {
      bscss: {
        files: 'scss/bs4/**/*.scss',
        tasks: ['dev-bscss']
      },
      swogcss: {
        files: 'scss/swog/**/*.scss',
        tasks: ['dev-swogcss']
      },
      swogjs: {
        files: '<%= concat.swog.src %>',
        tasks: ['dev-jsswog']
      }
    },
    exec: {
      'clean-css-bs': {
        command: 'npm run clean-css-bs'
      },
      'clean-css-swog': {
        command: 'npm run clean-css-swog'
      },
      'postcss-bs': {
        command: 'npm run postcss-bs'
      },
      'postcss-swog': {
        command: 'npm run postcss-swog'
      },
      sass_bs: {
        command: 'npm run sass-bs'
      },
      sass_swog: {
        command: 'npm run sass-swog'
      },
      'scss-lint': {
        command: 'npm run scss-lint'
      },
      'uglify-bs': {
        command: 'npm run uglify-bs'
      },
			'uglify-swog': {
        command: 'npm run uglify-swog'
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('dev-jsbs', [
    'clean:bsjs',
    'babel:dev',
    'concat:bootstrap',
    'babel:dist',
    'stamp:bootstrap'
  ]);
  grunt.registerTask('dist-jsbs', [
    'dev-jsbs',
    'exec:uglify-bs'
  ]);

  grunt.registerTask('dev-jsswog', [
    'clean:swogjs',
    //'babel:dev',
    'concat:swog',
    //'babel:dist',
    'stamp:swog'
  ]);
  grunt.registerTask('dist-jsswog', [
    'dev-jsswog',
    'exec:uglify-swog'
  ]);

  grunt.registerTask('dev-bscss', [
    'clean:bscss',
    'exec:sass_bs',
    'exec:postcss-bs'
  ]);
  grunt.registerTask('dist-bscss', [
    'dev-bscss',
    'exec:clean-css-bs'
  ]);

  grunt.registerTask('dev-swogcss', [
    'clean:swogcss',
    'exec:sass_swog',
    'exec:postcss-swog'
  ]);
  grunt.registerTask('dist-swogcss', [
    'dev-swogcss',
    'exec:clean-css-swog'
  ]);

  grunt.registerTask('dev', [
    //'clean:dist',
    'dev-swogcss',
    'dev-bscss',
    'dev-jsswog',
    'dev-jsbs'
  ]);
  grunt.registerTask('dist', [
    //'clean:dist',
    'dist-swogcss',
    'dist-bscss',
    'dist-jsswog',
    'dist-jsbs'
  ]);

  grunt.registerTask('test-scss', ['exec:scss-lint']);
  // Default Task is basically a rebuild
  grunt.registerTask('default', ['dev']);
  // Moved to the tasks folder:
  // grunt.registerTask('dev', ['connect', 'watch']);
};
