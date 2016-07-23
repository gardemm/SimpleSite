(function() {
  'use strict';

  angular
	.module('SSite')
	.controller('AnalyticCtrl', AnalyticCtrl);

  function AnalyticCtrl($rootScope, $scope) {
	$rootScope.page = 'analytic';
  }

}());
