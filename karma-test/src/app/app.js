define(function(require, exports, module) {

    var angular = require('angular');

    require('angular-ui-router');

    var app = angular.module('app', ['ui.router']);
    module.exports = app;
});
