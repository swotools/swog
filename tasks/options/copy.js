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
	},
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DA QUI IN GIU
	//non si usa perchè quando compilati vengono gia messi in distribuzione!! (/static/template)
	css: {
		files: [{
				expand: true,
				cwd: '<%=devdir%>/css/',
				src: ['**'],
				dest: '<%=pkg.distdir%>/css/'
			},

		],
	},
	js: {
		files: [{
				expand: true,
				cwd: '<%=devdir%>/js/',
				src: ['**'],
				dest: '<%=pkg.distdir%>/js/'
			},

		],
	},
	template: {
		files: [{
				expand: true,
				cwd: '<%=devdir%>/template/',
				src: ['**'],
				dest: '<%=pkg.distdir%>/template/'
			},

		],
	},
	images: {
		files: [{
				expand: true,
				cwd: '<%=devdir%>/i/',
				src: ['**'],
				dest: '<%=pkg.distdir%>/i/'
			},

		]
	}
};
