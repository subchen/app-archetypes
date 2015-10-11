import app from './app.js';

app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controllerUrl: 'app/home/home.js',
            controller: 'homeCtrl'
        });
}]);
