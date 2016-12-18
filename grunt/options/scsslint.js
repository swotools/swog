module.exports = {
	options: {
		bundleExec: true,
		config: 'scss/.scss-lint.yml',
		reporterOutput: null
	},
	bootstrap: {
		src: ['scss/**/*.scss', '!scss/bs3/_normalize.scss']
	}
};
