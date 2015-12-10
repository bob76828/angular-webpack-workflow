require('babel-core/register');
var webpackConfig = require('./webpack.test.babel.js');

// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig(config) {
    config.set({
        frameworks: ['mocha', 'sinon-chai'],

        reporters: ['spec', 'coverage'],

        files: ['test/tests.webpack.js'],

        preprocessors: {
            'test/tests.webpack.js': ['webpack', 'sourcemap']
        },

        browsers: [
            // Run tests using PhantomJS
            'PhantomJS'
        ],

        singleRun: true,

        // Configure code coverage reporter
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

        webpack: webpackConfig
    });
};
