(function(angular){
  angular.module('ComponentTestApp',[])
    .controller('MainCtrl',MainCtrl);
    MainCtrl.$inject=['$scope'];
    function MainCtrl($scope){
      this.hero = {
        name:'Sunday'
      };
    }
})(angular);