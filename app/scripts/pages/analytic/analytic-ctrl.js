(function() {
	'use strict';

	angular
		.module('SSite')
		.controller('AnalyticCtrl', AnalyticCtrl);

	function AnalyticCtrl($rootScope) {
		console.log('AnalyticCtrl');
		$rootScope.page = 'analytic';
	}

}());
