define(function (require, exports, module) {

    var app = require('./app');

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('myState', {
            url: '/state/:id',
            templateUrl: 'template.html',
            controller: 'MyCtrl',
            resolve: {
                data: ['myService', function (service) {
                    return service.findAll();
                }]
            }
        });
    }]);

});
