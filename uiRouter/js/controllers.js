let controlAp = angular.module('controlAp', []);
controlAp.controller('ctrl', function ($scope,$state) {
    $scope.arr = [{
        name: 'zhangsan',
        sex: 'boy'
    }, {
        name: 'lisi',
        sex: 'boy'
    }, {
        name: 'wangwu',
        sex: 'girl'
    }];
    $state.go('pageTab.page1');//用来指定默认的视图
});

controlAp.controller('ctrl1', function ($scope) {

});

controlAp.controller('ctrl2', function ($scope) {

});

controlAp.controller('ctrl3', function ($scope) {

});

controlAp.controller('ctrl4', function ($scope) {

});