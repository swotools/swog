module.exports = {
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
	},
	dist: {
		options: {
			compress: {
				warnings: false
			},
			preserveComments: false,
			mangle: false
		},
		src: ['<%= concat.bootstrap.dest %>','<%= concat.swog.dest %>'],
		dest: '<%=pkg.distdir%>/js/script.js'
	}
};
