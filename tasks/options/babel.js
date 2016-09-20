module.exports = {
	bsdev: {
		options: {
			sourceMap: true,
			modules: 'ignore'
		},
		files: {
			'js/bs4/src/util.js': 'js/bs4/util.js',
			'js/bs4/src/alert.js': 'js/bs4/alert.js',
			'js/bs4/src/button.js': 'js/bs4/button.js',
			'js/bs4/src/carousel.js': 'js/bs4/carousel.js',
			'js/bs4/src/collapse.js': 'js/bs4/collapse.js',
			'js/bs4/src/dropdown.js': 'js/bs4/dropdown.js',
			'js/bs4/src/modal.js': 'js/bs4/modal.js',
			'js/bs4/src/scrollspy.js': 'js/bs4/scrollspy.js',
			'js/bs4/src/tab.js': 'js/bs4/tab.js',
			'js/bs4/src/tooltip.js': 'js/bs4/tooltip.js',
			'js/bs4/src/popover.js': 'js/bs4/popover.js'
		}
	},
	bsdist: {
		options: {
			modules: 'ignore'
		},
		files: {
			'<%= concat.bootstrap.dest %>': '<%= concat.bootstrap.dest %>'
		}
	}
};
