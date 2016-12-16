module.exports = {
	bsdev: {
		options: {
			sourceMap: true
		},
		files: {
			'js/bs4/dist/util.js'      : 'js/bs4/util.js',
			'js/bs4/dist/alert.js'     : 'js/bs4/alert.js',
			'js/bs4/dist/button.js'    : 'js/bs4/button.js',
			'js/bs4/dist/carousel.js'  : 'js/bs4/carousel.js',
			'js/bs4/dist/collapse.js'  : 'js/bs4/collapse.js',
			'js/bs4/dist/dropdown.js'  : 'js/bs4/dropdown.js',
			'js/bs4/dist/modal.js'     : 'js/bs4/modal.js',
			'js/bs4/dist/scrollspy.js' : 'js/bs4/scrollspy.js',
			'js/bs4/dist/tab.js'       : 'js/bs4/tab.js',
			'js/bs4/dist/tooltip.js'   : 'js/bs4/tooltip.js',
			'js/bs4/dist/popover.js'   : 'js/bs4/popover.js'
		}
	},
	bsdist: {
		options: {
			extends: '../../../js/.babelrc'
		},
		files: {
			'<%= concat.bootstrap.dest %>' : '<%= concat.bootstrap.dest %>'
		}
	}
};
