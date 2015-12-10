import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackConfig from './webpack.base.js';

webpackConfig.output.publicPath = '/public/';
webpackConfig.output.filename = 'javascripts/[name].[hash].js';
webpackConfig.output.chunkFilename = 'javascripts/[name].[hash].js';
webpackConfig.devtool = 'hidden-source-map';
webpackConfig.bail = true;
webpackConfig.sassLoaderConfig = {
    sourceMap: false,
    outputStyle: 'compressed'
};

webpackConfig.plugins.push(
    new ExtractTextPlugin('stylesheets/[name].[hash].css', {
        disable: false
    }),
    new HtmlWebpackPlugin({
        template: './assets/client/index.html',
        inject: 'body'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        }
    })
);

export default webpackConfig;
