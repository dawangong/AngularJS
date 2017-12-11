apps.controller('ctrl',($scope) => {
    $scope.kz=false;
    $scope.toggle=() => {
        $scope.kz=!$scope.kz;
    }
});