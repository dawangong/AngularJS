let apps = angular.module('apps', ['ui.router', 'controlAp', 'serviceAp', 'directiveAp']);
apps.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("", "/page1");
    $stateProvider.state('page1', {
        url:'/page1',
        templateUrl: 'page1.html',
        controller: 'ctrl'
    }).state('page2', {
        url:'/page2',
        templateUrl: 'page2.html',
        controller: 'ctrl1'
    }).state('page3', {
        url:'/page3',
        templateUrl: 'page3.html',
        controller: 'ctrl2'
    }).state('page4', {
        url:'/page4',
        templateUrl: 'page4.html',
        controller: 'ctrl3'
    })
});

