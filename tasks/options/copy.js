module.exports = {
	pubcss: {
		files: [{
			src: ['<%=pkg.distdir%>/css/swog_core.css'],
			dest: '<%=pkg.publicdir%>/css/swog.css'
		}],
	},
	pubjs: {
		files: [{
			src: ['<%=pkg.distdir%>/js/swog.min.js'],
			dest: '<%=pkg.publicdir%>/js/swog.js'
		}, {
			src: ['<%=pkg.distdir%>/js/bootstrap.min.js'],
			dest: '<%=pkg.publicdir%>/js/bootstrap.js'
		}],
	},
	fonts: {
		files: [
			// includes files within path
			//{expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
			// includes files within path and its sub-directories
			//{expand: true, src: ['<%=devdir%>/fonts/**/*'], dest: '<%=pkg.distdir%>/fonts/'},
			{
				expand: true,
				cwd: '<%=devdir%>/fonts/',
				src: ['**'],
				dest: '<%=pkg.distdir%>/fonts/'
			},
		],
	}
};
