(function (window) {
	angular.module('myApp.compile',[]).directive('compile',compile);
	compile.$inject=['$compile'];
	function compile($compile) {
		return {
			scope:{
				compile:'='
			},
			link:function (scope,element,attrs) {
				let temp;
				for(let i in attrs){
					if(i === 'compile') {
						temp = attrs[i];
					}
				}
			}
		}
	}
})(window);
