import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackConfig from './webpack.base.js';

webpackConfig.plugins.push(
    new ExtractTextPlugin('stylesheets/[name].[hash].css', {
        disable: true
    }),
    new HtmlWebpackPlugin({
        template: './assets/client/index.html',
        inject: 'body'
    })
);

export default webpackConfig;
