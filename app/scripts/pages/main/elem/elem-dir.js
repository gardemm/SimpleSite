(function() {
  'use strict';

  angular
	.module('SSite')
	.directive('elem', function () {
	  return {
		restrict: "E",
		templateUrl: 'scripts/pages/main/elem/elem.html',
		controller: function () {
		  console.log('dir ctrl');
		}
	  }
	});
	
}());