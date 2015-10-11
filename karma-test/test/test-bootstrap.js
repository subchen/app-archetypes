// testcase file must be "/test/tests/**/*.test.js"
var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (file.indexOf('/base/test/tests/') === 0 && file.indexOf('.test.js') !== -1) {
            tests.push(file);
        }
    }
}

// require.js
require.config({
    baseUrl: '/base/src',

    paths: {
        'lodash': '../node_modules/lodash/index',
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'angular': '../node_modules/angular/angular.min',
        'angular-ui-router': '../node_modules/angular-ui-router/release/angular-ui-router.min',
        'angular-mocks': '../node_modules/angular-mocks/angular-mocks',
        'chai': '../node_modules/chai/chai',
        'sinon': '../node_modules/sinon/pkg/sinon',
        
        // test-lib
        'ng-mock': '../test/lib/ng-mock'
    },

    shim: {
        'lodash': {exports: '_'},
        'angular': {exports: 'angular', deps: ['jquery']},
        'angular-ui-router': {deps: ['angular']},
        'angular-mocks': {exports: 'angular.mock', deps: ['angular']}
    },

    deps: tests,

    callback: window.__karma__.start
});

// build-in modules
define('window', [], function () {
    return window;
});
define('document', [], function () {
    return window.document;
});
