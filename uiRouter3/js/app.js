let apps = angular.module('apps', ['ui.router', 'controlAp', 'serviceAp', 'directiveAp']);
apps.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise( "page1");
    $stateProvider.state('page1', {
        url:'/page1',
        views:{
            'v1':{
                templateUrl: 'page1.html'
            },
            'v2@':{
                templateUrl: 'page1-1.html'
            }
        },
        controller: 'ctrl'
    }).state('page2', {
        url:'/page2',
        views:{
            'v1':{
                templateUrl: 'page2.html'
            }
        },
        controller: 'ctrl1'
    }).state('page3', {
        url:'/page3',
        views:{
            'v1':{
                templateUrl: 'page3.html'
            }
        },
        controller: 'ctrl2'
    }).state('page4', {
        url:'/page4',
        views:{
            'v1':{
                templateUrl: 'page4.html'
            }
        },
        controller: 'ctrl3'
    })
        .state('page1.page1-1', {
        url:'/page1-1',
            views:{
                'v2@':{
                    templateUrl: 'page1-1.html'
                }
            }
    }).state('page1.page1-2', {
        url:'/page1-2',
        views:{
            'v2@':{
                templateUrl: 'page1-2.html'
            }
        }
    }).state('page1.page1-3', {
        url:'/page1-3',
        views:{
            'v2@':{
                templateUrl: 'page1-3.html'
            }
        }
    }).state('page1.page1-4', {
        url:'/page1-4',
        views:{
            'v2@':{
                templateUrl: 'page1-4.html'
            }
        }
    })
});

