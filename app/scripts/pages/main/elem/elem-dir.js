(function() {
  'use strict';

  angular
	.module('SSite')
	.directive('elem', function () {
	  return {
			restrict: "E",
			scope: {
				img: '=',
				title: '=',
				description: '=',
			},
			templateUrl: 'scripts/pages/main/elem/elem.html',
			controller: function () {
				
			}
	  }
	});
	
}());