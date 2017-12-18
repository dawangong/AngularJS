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

});

controlAp.controller('ctrl1', function ($scope) {

});

controlAp.controller('ctrl2', function ($scope) {

});

controlAp.controller('ctrl3', function ($scope) {

});

controlAp.controller('ctrl4', function ($scope) {

});