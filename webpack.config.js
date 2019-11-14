var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader'
			},
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{
				test: /favicon\.(ico|png)$/,
				use: 'file-loader?name=[name].[ext]'
			}
		]
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
			// favicon: './public/favicon.ico'
		})
		// new CopyWebpackPlugin([{ from: `${__dirname}/public/favicon.ico`, to: 'favicon.ico' }])
	]
}
