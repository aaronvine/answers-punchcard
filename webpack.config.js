'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./src/Index.tsx'
	],
	debug: true,
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.tsx?$/,
			loaders: ['awesome-typescript-loader'],
			exclude: /node_modules/
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.ts', '.tsx']
	}
};
