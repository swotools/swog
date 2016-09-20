module.exports = {
	bootstrap: {
		options: {
			loadPath: ['scss/bs4'],
			precision: 6,
			sourcemap: 'auto',
			style: 'expanded',
			trace: true
		},
		files: {
			'<%=pkg.distdir%>/css/<%= pkg.framework.name %>.css': './scss/bs4/<%= pkg.framework.name %>.scss'
		}
	},
	swog: {
		options: {
			loadPath: ['scss/swog'],
			precision: 6,
			sourcemap: 'auto',
			style: 'expanded',
			trace: true
		},
		files: {
			'<%=pkg.distdir%>/css/<%= pkg.name %>.css': './scss/swog/<%= pkg.name %>.scss'
		}
	}
};
