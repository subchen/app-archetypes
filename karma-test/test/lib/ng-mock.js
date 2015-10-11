define(function (require, exports, module) {

    var mock = require('angular-mocks');
    
    /**
     * Delegate angular.mock.module() and allow directly access angular service.
     * 
     * @param {String|function()|Array} fns
     */
    mock.configure = function (fns) {
        fns = [].slice.call(arguments);
        if (fns.length === 0 || typeof fns[0] !== 'string') {
            fns.unshift('app');
        }
        beforeEach(mock.module.apply(mock, fns));

        beforeEach(mock.inject(function ($rootScope, $httpBackend, $controller, $injector, $compile, $filter, $location, $templateCache) {
            mock.$rootScope = $rootScope;
            mock.$httpBackend = $httpBackend;
            mock.$controller = $controller;
            mock.$injector = $injector;
            mock.$compile = $compile;
            mock.$filter = $filter;
            mock.$location = $location;
            mock.$templateCache = $templateCache;

            if ($injector.has('$state')) {
                mock.$state = $injector.get('$state');
                mock.$stateParams = $injector.get('$stateParams');
            }
        }));

        afterEach(function () {
            mock.$httpBackend.verifyNoOutstandingExpectation();
            mock.$httpBackend.verifyNoOutstandingRequest();

            mock.$rootScope = undefined;
            mock.$httpBackend = undefined;
            mock.$controller = undefined;
            mock.$injector = undefined;
            mock.$compile = undefined;
            mock.$filter = undefined;
            mock.$location = undefined;
            mock.$templateCache = undefined;

            mock.$state = undefined;
            mock.$stateParams = undefined;
        });
    };

    module.exports = mock;
});
