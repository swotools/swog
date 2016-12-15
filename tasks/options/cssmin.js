module.exports = {
	options: {
		compatibility: 'ie9,-properties.zeroUnits',
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
	}
};
