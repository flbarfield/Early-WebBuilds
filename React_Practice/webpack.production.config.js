var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');

new webpack.optimize.CommonsChunkPlugin('common.js'),
new webpack.optimize.DedupePlugin(),
new webpack.optimize.UglifyJsPlugin(),
new webpack.optimize.AggressiveMergingPlugin()

var stripLoader = {
 test: [/\.js$/, /\.es6$/],
 exclude: /node_modules/,
 loader: WebpackStripLoader.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
