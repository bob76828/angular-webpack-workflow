import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

function webpackConfig() {
    const config = {};

    config.entry = {
        app: './assets/client/javascripts/app.js'
    };

    config.output = {
        path: __dirname + '/public',
        publicPath: 'http://localhost:3000/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    };

    config.devtool = 'eval';

    config.postcss = [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];

    config.sassLoaderConfig = {
        sourceMap: true
    };

    config.module = {
        preLoaders: [],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    plugins: ['transform-runtime'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file',
                query: {
                    name: 'images/[hash].[ext]'
                }
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file',
                query: {
                    name: 'fonts/[hash].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('style',
                    'css-loader?sourceMap!' +
                    'sass-loader?config=sassLoaderConfig')
            }
        ],
        postLoaders: []
    };

    config.plugins = [];

    config.devServer = {
        contentBase: './public',
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        },
        port: 3000
    };

    return config;
};

export default webpackConfig();
