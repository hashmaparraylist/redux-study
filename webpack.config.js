var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    devtool: 'inline-source-map',
    context: __dirname + '/app',
    entry: [
        './index.jsx',
    ],
    output: {
        path: __dirname + '/app',
        filename: './build/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
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
