
const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ctx = path.resolve(__dirname, './src');

module.exports = {
	entry: './solution/app.js',
	context: ctx,
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'app.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
					presets: [
						'@babel/preset-react'
					]
				}
			}
		],
	},
	devServer: {
		host: 'localhost',
		port: 3000,
		static: ctx,
		historyApiFallback: true,
		compress: true
	},
	watchOptions: {
		ignored: /node_modules/
	},
	resolve: {
		modules: [ path.resolve(__dirname, 'node_modules') ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'LianaCrew React exercise',
			template: `${ctx}/solution/index.html`,
			filename: 'index.html'
		})
	]
};