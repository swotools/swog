module.exports = {
	bscss: {
		files: 'scss/bs3/**/*.scss',
		tasks: ['dev-bscss', 'exec:postcss']
	},
	swogcss: {
		files: 'scss/swog/*.scss',
		tasks: ['dev-swogcss', 'exec:postcss']
	},
	swogjs: {
		files: 'js/swog/*.js',
		tasks: ['dev-swogcss']
	}
};
