module.exports = {
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
			banner: '<%= banner %>\n<%= jqueryCheck %>\n<%= jqueryVersionCheck %>\n+function () {\n',
			footer: '\n}();'
		},
		files: {
			src: '<%= concat.swog.dest %>'
		}
	}
};
