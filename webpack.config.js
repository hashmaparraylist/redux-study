var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    devtool: 'inline-source-map',
    context: __dirname + '/app',
    entry: [
        './index.jsx',
    ],
    plugins: [
        new htmlWebpackPlugin({
            inject: 'head',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: __dirname + '/app',
        filename: './build/bundle.js'
    },
    resolve: {
        root: __dirname + '/app',
    },
    module: {
        loaders: [{
            test: /\.jsx{0,1}$/,
            include: [
                path.resolve(__dirname + '/app')
            ],
            loader: 'babel-loader'
        }]
    }
};

module.exports = config;
