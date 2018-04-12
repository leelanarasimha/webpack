var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        vendor: ['vue'],
        bundle: './scripts/js/app.js',
        page2: './scripts/js/page1.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin('vendor')
],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
};
