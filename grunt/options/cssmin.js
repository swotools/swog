module.exports = {
	options: {
		compatibility: 'ie8,-properties.zeroUnits',
		keepSpecialComments: '*',
		sourceMap: false,
		// sourceMapInlineSources: true,
		advanced: false
	},
	core: {
		files: [{
			expand: true,
			cwd: '<%=pkg.distdir%>/css',
			src: ['*.css', '!*.min.css', '!style.css'],
			dest: '<%=pkg.distdir%>/css',
			ext: '.min.css'
		}]
	},
	dist: {
		files: {
			'<%=pkg.distdir%>/css/style.css': ['<%=pkg.distdir%>/css/*.min.css']
		}
	}
};
