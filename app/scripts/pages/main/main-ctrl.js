(function() {
	'use strict';

	angular
		.module('SSite')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl($rootScope) {
		// todo
		$rootScope.page = 'main';
	}

}());
