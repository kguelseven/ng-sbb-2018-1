const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    const addPlugin = (add, plugin) => add ? plugin : undefined;
    const ifProd = plugin => addPlugin(env.prod, plugin);
    const removeEmpty = array => array.filter(i => !!i);
    return {
        entry: {
            'polyfills': './polyfills.browser.ts',
            'vendor':    './vendor.browser.ts',
            'main':       './main.browser.ts'
        },
        output: {
            filename: '[name].[chunkhash].bundle.js',
            path: resolve(__dirname, 'dist'),
            pathinfo: !env.prod,
        },
        resolve: {
            extensions: ['', '.ts', '.js']
        },
        context: resolve(__dirname, 'src'),
        devtool: 'source-map',
        bail: env.prod,
        module: {
            loaders: [
                {test: /\.ts$/, loader: ['ts', 'angular2-template-loader']},
                {test: /\.html$/, loader: 'raw-loader'},
                {test: /\.css?$/, loaders: ['style', 'raw']},
                {test: /\.json$/, loader: 'json'} // workaround: https://github.com/webpack/node-libs-browser/issues/19
            ],
        },
        plugins: removeEmpty([
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            ifProd(new webpack.optimize.UglifyJsPlugin({
                comments: false,
                compress: {
                    screw_ie8: true
                }
            }))
        ])
    }
};
