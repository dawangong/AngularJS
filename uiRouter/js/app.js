let apps = angular.module('apps', ['ui.router', 'controlAp', 'serviceAp', 'directiveAp']);
apps.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("", "/pageTab");
    $stateProvider.state('pageTab', {
        url:'/pageTab',
        templateUrl: 'pageTab.html',
        controller: 'ctrl'
    }).state('pageTab.page1', {
        url:'/page1',
        templateUrl: 'page1.html',
        controller: 'ctrl1'
    }).state('pageTab.page2', {
        url:'/page2',
        templateUrl: 'page2.html',
        controller: 'ctrl2'
    }).state('pageTab.page3', {
        url:'/page3',
        templateUrl: 'page3.html',
        controller: 'ctrl3'
    }).state('pageTab.page4', {
        url:'/page4',
        templateUrl: 'page4.html',
        controller: 'ctrl4'
    })
});

