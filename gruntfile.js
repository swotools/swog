module.exports = function(grunt) {
	'use strict';
	// Force use of Unix newlines
	grunt.util.linefeed = '\n';
	// Utility to load the different option files
	function loadConfig(path) {
		var glob = require('glob');
		var object = {};
		var key;

		glob.sync('*', {
			cwd: path
		}).forEach(function(option) {
			key = option.replace(/\.js$/, '');
			object[key] = require(path + option);
		});

		return object;
	}

	var config = {
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
			' * SWOG v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
			' * Copyright 2016-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
			' */\n',
		bsbanner: '/*!\n' +
			' * Bootstrap v<%= pkg.framework.version %> (<%= pkg.framework.homepage %>)\n' +
			' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.framework.author %>\n' +
			' * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n' +
			' */\n',
		jqueryCheck: 'if (typeof jQuery === \'undefined\') {\n' +
			'  throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\')\n' +
			'}\n',
		jqueryVersionCheck: '+function ($) {\n' +
			'\'use strict\';\n' +
			'  var version = $.fn.jquery.split(\' \')[0].split(\'.\')\n' +
			'  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 3)) {\n' +
			'    throw new Error(\'Bootstrap\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\')\n' +
			'  }\n' +
			'}(jQuery);\n\n',
	};

	// Load all the tasks options in tasks/options base on the name:
	// watch.js => watch{}
	grunt.util._.extend(config, loadConfig('./grunt/options/'));

	grunt.initConfig(config);

	require('load-grunt-tasks')(grunt, {
		scope: 'devDependencies',
		// Exclude Sass compilers. We choose the one to load later on.
		pattern: ['grunt-*', '!grunt-sass', '!grunt-contrib-sass']
	});

	// CSS distribution task.
	// Supported Compilers: sass (Ruby) and libsass.
	(function(sassCompilerName) {
		require('./grunt/tasks/sass-compile/' + sassCompilerName + '.js')(grunt);
		grunt.log.writeln('Ciao ' + sassCompilerName);

	})(process.env.SWO_SASS || 'libsass');

	// Load tasks from the tasks folder
	grunt.loadTasks('./grunt/tasks');

	grunt.registerTask('dev-jsbs', [
		'clean:bsjs',
		'concat:bootstrap'
	]);
	grunt.registerTask('dev-jsswog', [
		'clean:swogjs',
		'concat:swog'
	]);
	grunt.registerTask('dev-bscss', [
		'clean:bscss',
		'sass:bootstrap',
	]);
	grunt.registerTask('dev-swogcss', [
		'clean:swogcss',
		'sass:swog',
	]);
	// Default Task is basically a rebuild
	grunt.registerTask('default', ['dev']);
	// Moved to the tasks folder:
	// grunt.registerTask('dev', ['connect', 'watch']);
};
