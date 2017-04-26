module.exports = function(grunt) {
	'use strict';
	// Force use of Unix newlines
	grunt.util.linefeed = '\n';
	// Utility to load the different option files
	function loadConfig(path) {
		var glob = require('glob');
		var object = {};
		var key;

		glob.sync('*', {cwd: path}).forEach(function(option) {
			key = option.replace(/\.js$/, '');
			object[key] = require(path + option);
		});

		return object;
	}

	// Load all the tasks options in tasks/options base on the name:
	// watch.js => watch{}
	//grunt.util._.extend(config, loadConfig('./grunt/options/'));

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' + ' * SWOG v<%= pkg.version %> (<%= pkg.homepage %>)\n' + ' * Copyright 2016-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' + ' */\n',
		bsbanner: '/*!\n' + ' * Bootstrap v<%= pkg.framework.version %> (<%= pkg.framework.homepage %>)\n' + ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.framework.author %>\n' + ' * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n' + ' */\n',
		jqueryCheck: 'if (typeof jQuery === \'undefined\') {\n' + '  throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\')\n' + '}\n',
		jqueryVersionCheck: '+function ($) {\n' + '\'use strict\';\n' + '  var version = $.fn.jquery.split(\' \')[0].split(\'.\')\n' + '  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 3)) {\n' + '    throw new Error(\'Bootstrap\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\')\n' + '  }\n' + '}(jQuery);\n\n',

		clean: {
			// dist: {
			// 	src: [
			// 		"<%=pkg.distdir%>/css",
			// 		"<%=pkg.distdir%>/js"
			// 	]
			// },
			swogcss: {
				src: ["<%=pkg.distdir%>/css/swog*"]
			},
			bscss: {
				src: ["<%=pkg.distdir%>/css/bootstrap*"]
			},
			bsjs: {
				src: ["<%=pkg.distdir%>/js/bootstrap*"]
			},
			swogjs: {
				src: ["<%=pkg.distdir%>/js/swog*"]
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
					'js/bs3/transition.js',
					'js/bs3/alert.js',
					'js/bs3/button.js',
					'js/bs3/carousel.js',
					'js/bs3/collapse.js',
					'js/bs3/dropdown.js',
					'js/bs3/modal.js',
					'js/bs3/tooltip.js',
					'js/bs3/popover.js',
					'js/bs3/scrollspy.js',
					'js/bs3/tab.js',
					'js/bs3/affix.js'
				],
				dest: '<%=pkg.distdir%>/js/<%= pkg.framework.name %>.js'
			},
			swog: {
				src: ['js/swog/general.js'],
				dest: '<%=pkg.distdir%>/js/<%= pkg.name %>.js'
			}
		},
		copy: {
			fonts: {
				files: [// includes files within path
					//{expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
					// includes files within path and its sub-directories
					//{expand: true, src: ['<%=devdir%>/fonts/**/*'], dest: '<%=pkg.distdir%>/fonts/'},
					{
						expand: true,
						cwd: '<%=devdir%>/fonts/',
						src: ['**'],
						dest: '<%=pkg.distdir%>/fonts/'
					}
				]
			}
		},
		cssmin: {
			options: {
				compatibility: 'ie8,-properties.zeroUnits',
				keepSpecialComments: '*',
				sourceMap: true,
				// sourceMapInlineSources: true,
				advanced: false
			},
			core: {
				files: [
					{
						expand: true,
						cwd: '<%=pkg.distdir%>/css',
						src: [
							'*.css', '!*.min.css'
						],
						dest: '<%=pkg.distdir%>/css',
						ext: '.min.css'
					}
				]
			},
			dist: {
				options: {
					keepSpecialComments: 0,
					sourceMap: false
				},
				files: {
					'<%=pkg.distdir%>/css/style.css': ['<%=pkg.distdir%>/css/*.min.css']
				}
			}
		},
		exec: {
			postcss: {
				command: 'npm run postcss'
			},
			npmUpdate: {
				command: 'npm update'
			}
		},
		imagemin: {
			dynamic: {
				files: [
					{
						expand: true,
						cwd: '<%=devdir%>/i/',
						src: ['**/*.{png,jpg,jpeg,gif}'],
						dest: '<%=pkg.distdir%>/i/'
					}
				]
			}
		},
		scsslint: {
			options: {
				bundleExec: true,
				config: 'scss/.scss-lint.yml',
				reporterOutput: null
			},
			bootstrap: {
				src: ['scss/**/*.scss', '!scss/bs3/_normalize.scss']
			}
		},
		stamp: {
			bootstrap: {
				options: {
					banner: '<%= bsbanner %>\n<%= jqueryCheck %>\n<%= jqueryVersionCheck %>\n'
				},
				files: {
					src: '<%= concat.bootstrap.dest %>'
				}
			},
			swog: {
				options: {
					banner: '<%= banner %>\n'
				},
				files: {
					src: '<%= concat.swog.dest %>'
				}
			}
		},
		uglify: {
			options: {
				compress: {
					warnings: false
				},
				mangle: true,
				preserveComments: /^!|@preserve|@license|@cc_on/i
			},
			bootstrap: {
				src: '<%= concat.bootstrap.dest %>',
				dest: '<%=pkg.distdir%>/js/<%= pkg.framework.name %>.min.js'
			},
			swog: {
				src: '<%= concat.swog.dest %>',
				dest: '<%=pkg.distdir%>/js/<%= pkg.name %>.min.js'
			}
		},
		watch: {
			bscss: {
				files: 'scss/bs3/**/*.scss',
				tasks: ['dev-bscss', 'exec:postcss']
			},
			swogcss: {
				files: 'scss/swog/*.scss',
				tasks: ['dev-swogcss', 'exec:postcss']
			},
			allcss: {
				files: 'scss/**/*.scss',
				tasks: ['dev-bscss', 'dev-swogcss', 'exec:postcss']
			},
			swogjs: {
				files: 'js/swog/*.js',
				tasks: ['dev-swogcss']
			}
		}

	});
	require('load-grunt-tasks')(grunt);
	// require('load-grunt-tasks')(grunt, {
	// 	scope: 'devDependencies',
	// 	// Exclude Sass compilers. We choose the one to load later on.
	// 	pattern: ['grunt-*', '!grunt-sass', '!grunt-contrib-sass']
	// });

	// CSS distribution task.
	// Supported Compilers: sass (Ruby) and libsass.
	(function(sassCompilerName) {
		require('./scss/' + sassCompilerName + '.js')(grunt);
		grunt.log.writeln('Ciao ' + sassCompilerName);

	})(process.env.SWO_SASS || 'libsass');

	// Load tasks from the tasks folder
	//grunt.loadTasks('./grunt/tasks');

	grunt.registerTask('dev-jsbs', ['clean:bsjs', 'concat:bootstrap']);
	grunt.registerTask('dev-jsswog', ['clean:swogjs', 'concat:swog']);
	grunt.registerTask('dev-bscss', ['clean:bscss', 'sass:bootstrap']);
	grunt.registerTask('dev-swogcss', ['clean:swogcss', 'sass:swog']);
	grunt.registerTask('dist-bscss', ['clean:bscss', 'sass:bootstrapdist']);
	grunt.registerTask('dist-swogcss', ['clean:swogcss', 'sass:swogdist']);

	grunt.registerTask('dev', [
		'dev-jsbs',
		'stamp:bootstrap',
		'dev-jsswog',
		'stamp:swog',
		'dev-bscss',
		'dev-swogcss',
		'exec:postcss'
	]);
	grunt.registerTask('dist', [
		'dev-jsbs',
		'stamp:bootstrap',
		'dev-jsswog',
		'stamp:swog',
		'dist-bscss',
		'dist-swogcss',
		'exec:postcss',
		'uglify:bootstrap',
		'uglify:swog',
		//'cssmin:core'
	]);
	// Default Task is basically a rebuild
	grunt.registerTask('default', ['dev']);
};
