const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './App.jsx',

    output: {
        filename: "[name].js",
        path:  path.resolve(__dirname, 'built'),
    },

    resolve: {
        extensions: ['.js','.jsx']
    },
    devtool: 'eval',
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015','babel-preset-react'],
                    plugins: [ 'react-hot-loader/babel']
                }
            },
        },{
            test: /\.css$/,
            //use: ["style-loader", "css-loader"],
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
            {
                test: /\.s?css$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
};