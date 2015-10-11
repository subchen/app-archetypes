define(function(require) {
    var assert = require('chai').assert;
    var validate = require('util/validate');

    describe('ipv4 checking', function() {

        it('valid ipv4', function() {
            assert.isTrue(validate.ipv4('192.168.0.1'));
            assert.isTrue(validate.ipv4('0.0.0.0'));
            assert.isTrue(validate.ipv4('255.255.255.255'));
        });

        it('invalid ipv4', function() {
            assert.isFalse(validate.ipv4('a.b.c.d'));
            assert.isFalse(validate.ipv4('0.0.0.256'));
            assert.isFalse(validate.ipv4('127.0.0.1.1'));
        });

    });

});
