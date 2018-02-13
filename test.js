// 定义一个模块
var mainApp = angular.module("mainApp", []);


// 使用 provider 创建 service 定义一个方法用于计算两数乘积
mainApp.config(function($provide) {


    $provide.provider('MathService', function() {

        this.$get = function() {
            var factory = {};

            factory.multiply = function(a, b) {
                return a * b;
            };
            return factory;
        };

    });



});