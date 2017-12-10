const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './js/index.js',
        styles: './scss/_styles.scss'
    },
    output: {
        filename: '[name]-build.js',
        path: path.resolve( __dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.png$/,
                loader: "file-loader",
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
        new ExtractTextPlugin("styles.css"),
    ]
};