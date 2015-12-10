import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackConfig from './webpack.base.js';

webpackConfig.entry = {};
webpackConfig.output = {};
webpackConfig.devtool = 'inline-source-map';
webpackConfig.module.preLoaders.push({
    test: /\.js$/,
    exclude: [
        /node_modules/,
        /\.test\.js$/
    ],
    loader: 'isparta-instrumenter'
});

webpackConfig.plugins.push(
    new ExtractTextPlugin('stylesheets/[name].[hash].css', {
        disable: true
    })
);

export default webpackConfig;
