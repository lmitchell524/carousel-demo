
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
	entry: {
		app: path.join(__dirname, 'index.js')
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '/dir')
	},
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
		]
	},
	plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })],
	mode : 'development',
	devtool: 'source-map',
	stats: 'none'
};
