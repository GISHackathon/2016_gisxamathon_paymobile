var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';
var isProduction = ENV === 'production';

module.exports = {
  entry: './src/index.js',
  output : {
		path : __dirname + "/dist",
		filename : '[name]-[hash].js',
		publicPath : isProduction ? './' : '/'
	},

  devtool: isProduction ? undefined : 'source-map',
  debug: !isProduction,

  module: {
    loaders: [
      {
				test : /\.js$/,
				exclude: /(node_modules)/,
        loader : 'babel',
				query: {
					presets: [["es2015", {"loose": true}]],
					plugins:[
						["transform-es2015-classes", {"loose": true}]
					]
			  }
	    },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test : /\.less$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
      },
      {
        test : /\.css/,
        loader: ExtractTextPlugin.extract('css?sourceMap')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("app.css"),
    new HtmlWebpackPlugin({
     template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })

  ]
};
