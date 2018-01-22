(function(angular) {
    function HeroDetailController() {

    }
    angular.module('ComponentTestApp')
        .component('heroDetail', {
            templateUrl: 'heroDetail.html',
            controller: HeroDetailController,
            bindings: {
                hero: '<'
            }
        });
})(angular);