module.exports = {
	transpileDependencies: ['vuetify'],
	outputDir: './dist/build',
	assetsDir: './static/',
	devServer: {
		proxy: 'http://localhost:1212',
		port: 2121,
	},
};
