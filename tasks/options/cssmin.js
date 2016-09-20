module.exports = {
	core: {
		options: {
			// TODO: disable `zeroUnits` optimization once clean-css 3.2 is released
			//    and then simplify the fix for https://github.com/twbs/bootstrap/issues/14837 accordingly
			compatibility: 'ie9',
			keepSpecialComments: '*',
			sourceMap: false,
			advanced: false
		},
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
			shorthandCompacting: false,
			roundingPrecision: -1
		},
		files: {
			'<%=pkg.distdir%>/css/<%=pkg.name%>_core.css': ['<%=pkg.distdir%>/css/**/*.min.css']
		}
	}
};
