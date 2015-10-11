define(function (require, exports, module) {

    var assert = require('chai').assert;
    var mock = require('ng-mock');

    require('app/routes');

    describe('app routes test', function () {

        var myServiceMock = {};
        var state = 'myState';

        mock.configure(function($provide) {
            $provide.value('myService', myServiceMock);
        });

        beforeEach(function() {
            mock.$templateCache.put('template.html', '');
        });

        it('should respond to URL', function() {
            var url = mock.$state.href(state, { id: 1 });
            assert.equal(url, '#/state/1');
        });

        it('should resolve data', function() {
            var MOCK_VALUE = 'xxx';
            myServiceMock.findAll = function() {
                return MOCK_VALUE;
            };

            mock.$state.go(state);
            mock.$rootScope.$digest();
            assert.equal(mock.$state.current.name, state);

            // Call invoke to inject dependencies and run function
            assert.equal(mock.$injector.invoke(mock.$state.current.resolve.data), MOCK_VALUE);
        });

    });

});
