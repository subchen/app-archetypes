// Karma configuration

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            { pattern : 'node_modules/lodash/index.js', included: false, watched: false },
            { pattern : 'node_modules/jquery/dist/jquery.min.js', included: false, watched: false },
            { pattern : 'node_modules/angular/angular.min.js', included: false, watched: false },
            { pattern : 'node_modules/angular-ui-router/release/angular-ui-router.min.js', included: false, watched: false },
            { pattern : 'node_modules/angular-mocks/angular-mocks.js', included: false, watched: false },
            { pattern : 'node_modules/chai/chai.js', included: false, watched: false },
            { pattern : 'node_modules/sinon/pkg/sinon.js', included: false, watched: false },

            { pattern: 'src/**/*.js', included: false },
            { pattern: 'test/lib/**/*.js', included: false },
            { pattern: 'test/tests/**/*.js', included: false },

            'test/test-bootstrap.js'
        ],

        // list of files to exclude
        exclude: [],

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // Chrome, PhantomJS
        browsers: ['PhantomJS'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': 'coverage'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'junit', 'coverage'],

        junitReporter: {
            outputFile: 'test-results.xml'
        },

        coverageReporter:{
            type : 'cobertura', // 'html', 'text', 'cobertura'
            dir : 'coverage/'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: false,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    })
};
