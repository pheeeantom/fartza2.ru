var path = require('path');

module.exports = {
    entry: './src/client/app.js',
    devtool: 'source-map',
    cache: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/built'),
        filename: '[name].bundle.js',
        publicPath: '/built/',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: []
                    }
                }]
            },
            {
              test: /\.css$/,
              use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
           ]
    }
};