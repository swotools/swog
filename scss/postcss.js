module.exports = {
	use: [
		'postcss-flexbugs-fixes',
		'autoprefixer'
	],
	map: false,
	// map: {
	// 	inline: false,
	// 	annotation: false,
	// 	sourcesContent: false
	// },
	autoprefixer: {
		browsers: [
			'Chrome >= 20',
			'Firefox >= 24',
			'Edge >= 12',
			'Explorer >= 8',
			'iOS >= 6',
			'Safari >= 6',
			'Android 2.3',
			'Android >= 4',
			'Opera >= 12'
		]
	}
};
