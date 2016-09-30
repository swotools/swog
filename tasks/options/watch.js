module.exports = {

	bscss: {
		files: 'scss/bs4/**/*.scss',
		tasks: ['dev-bscss']
	},
	swogcss: {
		files: 'scss/swog/*.scss',
		tasks: ['dev-swogcss']
	},
	allcss: {
		files: 'scss/**/*.scss',
		tasks: ['dev-bscss', 'dev-swogcss']
	}
};
