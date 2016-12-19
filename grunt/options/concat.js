module.exports = {
	options: {
		// Custom function to remove all export and import statements
		process: function(src) {
			return src.replace(/^(export|import).*/gm, '');
		}
	},
	bootstrap: {
		src: [
			'js/bs3/transition.js',
			'js/bs3/alert.js',
			'js/bs3/button.js',
			'js/bs3/carousel.js',
			'js/bs3/collapse.js',
			'js/bs3/dropdown.js',
			'js/bs3/modal.js',
			'js/bs3/tooltip.js',
			'js/bs3/popover.js',
			'js/bs3/scrollspy.js',
			'js/bs3/tab.js',
			'js/bs3/affix.js'
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
