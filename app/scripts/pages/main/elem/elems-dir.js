(function() {
  'use strict';

  angular
		.module('SSite')
		.directive('elem', function () {
		  return {
				restrict: "E",
				scope: {
				  elements: '='
				},
				templateUrl: 'scripts/pages/main/elem/elems.html',
				controller: function () {
					console.log('elems');
				}
		  }
		});
	
}());