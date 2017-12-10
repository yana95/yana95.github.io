const path = require('path');
module.exports = {
    entry: {
        app: './index.js',
    },
    output: {
        filename: '[name]-build.js',
        path: path.resolve( __dirname, "dist")
    },
    resolveLoader: {
        modules: ["node_modules", path.resolve(__dirname, "loaders")]
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                use: 'remove-numbers-props'
            }
        ]
    }
};