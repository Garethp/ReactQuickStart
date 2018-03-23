var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: [APP_DIR + '/index.js', 'webpack-dev-server/client?http://localhost:8080/'],
    output: {
        path: BUILD_DIR,
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module : {
        rules: [
            {
                test: /\.js?/,
                include: APP_DIR,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.json$/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
};

module.exports = config;
