module.exports = {
	dynamic: {
		files: [{
			expand: true,
			cwd: '<%=devdir%>/i/',
			src: ['**/*.{png,jpg,jpeg,gif}'],
			dest: '<%=pkg.distdir%>/i/'
		}]
	}
};
