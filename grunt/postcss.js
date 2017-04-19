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
			'Chrome >= 35',
			'Firefox >= 38',
			'Edge >= 12',
			'Explorer >= 10',
			'iOS >= 8',
			'Safari >= 8',
			'Android 2.3',
			'Android >= 4',
			'Opera >= 12'
		]
	}
};
