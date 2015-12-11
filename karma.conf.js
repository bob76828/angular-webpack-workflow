module.exports = function karmaConfig(config) {
    config.set({
        frameworks: ['mocha', 'sinon-chai'],

        reporters: ['spec', 'coverage'],

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'test/tests.webpack.js'
        ],

        preprocessors: {
            'test/tests.webpack.js': ['webpack', 'sourcemap']
        },

        browsers: [
            'PhantomJS'
        ],

        singleRun: true,

        coverageReporter: {
            reporters: [
                {type: 'html'},
                {type: 'text'},
                {type: 'text-summary'},
            ],
            dir: 'coverage/'
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        webpack: {
            devtool: 'inline-source-map',
            module: {
                preLoaders: [{
                    test: /\.js$/,
                    exclude: [
                        /node_modules/,
                        /\.test\.js$/
                    ],
                    loader: 'isparta-instrumenter'
                }],
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
                        test: /\.html$/,
                        loader: 'raw'
                    }
                ],
                postLoaders: []
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};
