(function() {
	'use strict';

	angular
		.module('SSite')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl($rootScope) {
		console.log('main overview page');
		$rootScope.page = 'main';
	}

}());
