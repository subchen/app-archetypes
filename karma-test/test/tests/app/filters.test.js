define(function (require, exports, module) {

    var assert = require('chai').assert;
    var mock = require('ng-mock');

    require('app/filters');

    describe('angular filter test', function () {

        mock.configure();

        it('should give us uppercase', function () {
            var upper = mock.$filter('upper');
            assert.equal(upper('abc'), 'ABC');
            assert.equal(upper('ABC'), 'ABC');
        });
    });

});
