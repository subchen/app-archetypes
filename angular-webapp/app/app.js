import angular from 'angular';
import asyncLoader from 'angular-async-loader';
import 'angular-ui-router';

let app = angular.module('app', ['ui.router']);
asyncLoader.configure(app);

export default app;
