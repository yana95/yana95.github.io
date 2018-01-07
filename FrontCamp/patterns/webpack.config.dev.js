const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: './js/index.js',
        styles: './scss/_styles.scss'
    },
    output: {
        filename: '[name]-build.js',
        path: path.resolve( __dirname, "dist")
    },
    devServer: {
        port: 9000
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
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
                    name: '[path][name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
        new ExtractTextPlugin("styles.css"),
    ]
};