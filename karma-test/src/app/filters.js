define(function(require, exports, module) {

    var app = require('./app');

    app.filter('upper', function() {
        return function(s) {
            return s.toUpperCase();
        };
    });
});
