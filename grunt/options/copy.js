module.exports = {
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
