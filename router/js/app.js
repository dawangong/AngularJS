let apps = angular.module('apps', ['ngRoute', 'controlAp', 'serviceAp', 'directiveAp']);
apps.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'page1.html',
        controller: 'ctrl1'
    }).when('/first', {
        templateUrl: 'page2.html',
        controller: 'ctrl2'
    }).when('/second', {
        templateUrl: 'page3.html',
        controller: 'ctrl3'
    }).when('/third', {
        templateUrl: 'page4.html',
        controller: 'ctrl4'
    })
});