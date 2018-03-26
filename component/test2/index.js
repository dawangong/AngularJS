import angular from '../../js/angular';
import controller from './tabCtrl';

const ddo = {
	restrict: 'E',
	controller: controller
};

export default angular.module('component', []).directive('tab', () => ddo).name;
