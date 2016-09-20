module.exports = {
	options: {
		// Custom function to remove all export and import statements
		process: function(src) {
			return src.replace(/^(export|import).*/gm, '');
		},
		stripBanners: false
	},
	bootstrap: {
		src: [
			'js/bs4/util.js',
			'js/bs4/alert.js',
			'js/bs4/button.js',
			'js/bs4/carousel.js',
			'js/bs4/collapse.js',
			'js/bs4/dropdown.js',
			'js/bs4/modal.js',
			'js/bs4/scrollspy.js',
			'js/bs4/tab.js',
			'js/bs4/tooltip.js',
			'js/bs4/popover.js'
		],
		dest: '<%=pkg.distdir%>/js/<%= pkg.framework.name %>.js'
	},
	swog: {
		src: [
			'js/swog/general.js'
		],
		dest: '<%=pkg.distdir%>/js/<%= pkg.name %>.js'
	},
	dist: {
		src: [
			'<%= concat.bootstrap.dest %>',
			'<%= concat.swog.dest %>',
		],
		dest: '<%=pkg.distdir%>/js/<%= pkg.name %>_core.js'
	}
};
