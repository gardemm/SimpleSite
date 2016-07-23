(function() {
  'use strict';

  angular
	.module('SSite')
	.controller('MainCtrl', MainCtrl);

	function MainCtrl($rootScope, $scope) {
	  console.log('main overview page');
	  $rootScope.page = 'main';

	  $scope.elements = [{ title: 'William Pole',
	    url: 'http://placehold.it/200x200/777777/fff?',	
	    description: 'Loreum ipsem dole'
	  },
	  { title: 'William Pole',
	    url: 'http://placehold.it/200x200/777777/fff?',	
	    description: 'Loreum ipsem dole'
	  },
	  { title: 'William Pole',
	    url: 'http://placehold.it/200x200/777777/fff?',	
	    description: 'Loreum ipsem dole'
	  },
	  { title: 'William Pole',
	    url: 'http://placehold.it/200x200/777777/fff?',	
	    description: 'Loreum ipsem dole'
	  },
	  ];
	}

}());
