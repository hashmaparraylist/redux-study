var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    devtool: 'inline-source-map',
    context: __dirname + 'app'
    entry: [
        './index.js',
    ],
    plugins: [
        new htmlWebpackPlugin({
            inject: 'head',
            template: 'index.html'
        })
    ],
    output: {
        path: __dirname + 'app',
        filename: './build/bundle.js'
    },
    resolve: {
        root: __dirname + 'app',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname + 'app')
            ],
            loader: 'babel-loader'
        }]
    }
};

module.exports = config;
