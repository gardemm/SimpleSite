(function() {
	'use strict';

	angular
		.module('SSite')
		.controller('ReportCtrl', ReportCtrl);

	function ReportCtrl($rootScope) {
		console.log('report ctrl initialized');
		$rootScope.page = 'report';
	}

}());
