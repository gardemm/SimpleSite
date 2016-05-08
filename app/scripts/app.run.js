(function() {
    'use strict';

    angular
        .module('SSite')
        .run(runBlock);

    function runBlock($log, $rootScope, mdResize, User) {
        $rootScope.$on('$stateChangeStart', 
			function(event, toState, toParams, fromState, fromParams, options) {
				User.init();
			});
    }

}());