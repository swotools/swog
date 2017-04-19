module.exports = {
	options: {
		compatibility: 'ie8,-properties.zeroUnits',
		keepSpecialComments: '*',
		sourceMap: true,
		// sourceMapInlineSources: true,
		advanced: false
	},
	core: {
		files: [{
			expand: true,
			cwd: '<%=pkg.distdir%>/css',
			src: ['*.css', '!*.min.css'],
			dest: '<%=pkg.distdir%>/css',
			ext: '.min.css'
		}]
	},
	dist: {
		options: {
			keepSpecialComments: 0,
			sourceMap: false,
		},
		files: {
			'<%=pkg.distdir%>/css/style.css': ['<%=pkg.distdir%>/css/*.min.css']
		}
	}
};
