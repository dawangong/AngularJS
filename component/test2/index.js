import angular from '../../js/angular';
import controller from './tabCtrl';
import template from './tab.tpl.html';

const tabDDO = {
	restrict: 'E',
	controller: controller,
	controllerAs: '$ctrl',
	transclude: true,
	bindings:{
		attr: '<set'
	},
	template: template
};

export default angular.module('component', []).component('tab', tabDDO).name;
