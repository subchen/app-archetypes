System.config({
    baseURL: '/',
    transpiler: 'babel',
    babelOptions: {
        'optional': [
            'runtime',
            'es6.spec.templateLiterals'
        ]
    },
    map: {
        'babel': 'node_modules/babel-core/browser.min.js',
        'babel-runtime': 'node_modules/babel-core/browser-polyfill.min.js',
        'lodash': 'node_modules/lodash/index.js',
        'jquery': 'node_modules/jquery/dist/jquery.min.js',
        'angular': 'node_modules/angular/angular.min.js',
        'angular-ui-router': 'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'angular-async-loader': 'node_modules/angular-async-loader/angular-async-loader.js'
    },
    meta: {
        'babel': {
            deps: ['babel-runtime']
        },
        'babel-runtime': {
            format: 'global'
        },
        'lodash': {
            format: 'global',
            exports: '_'
        },
        'angular': {
            format: 'global',
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-ui-router': {
            format: 'global',
            deps: ['angular']
        }
    }
});

System.shims = function (shims) {
    Object.keys(shims).forEach(function (name) {
        System.set(name, System.newModule({
            'default': shims[name]
        }));
    });
};

System.shims({
    'window': window,
    'document': window.document
});

// angular application bootstrap
System.amdRequire(['angular', 'document', 'app/routes.js'], function(angular, document) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });
});
