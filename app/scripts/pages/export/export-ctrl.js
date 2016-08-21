(function() {
  'use strict';

  angular
	.module('SSite')
	.controller('ExportCtrl', ExportCtrl);

  function ExportCtrl($rootScope, $scope) {
		$rootScope.page = 'export';

		// chart.js line
		$scope.chart = {
			line: {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
		    series: ['Series A', 'Series B'],
		    data: [
		    	[65, 59, 80, 81, 56, 55, 40],
		    	[28, 48, 40, 19, 86, 27, 90]
		  	],
		    datasetOverride: [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }],
		  	options: {
			    scales: {
			      yAxes: [
			        {
			          id: 'y-axis-1',
			          type: 'linear',
			          display: true,
			          position: 'left'
			        },
			        {
			          id: 'y-axis-2',
			          type: 'linear',
			          display: true,
			          position: 'right'
			        }
			      ]
		    	}
		  	}
			},

			bar: {
				labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  			series: ['Series A', 'Series B'],
  			data: [
			    [65, 59, 80, 81, 56, 55, 40],
			    [28, 48, 40, 19, 86, 27, 90]
			  ]
			},

			doughnut: {
				labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
  			data: [300, 500, 100]
			}
			
		} // $scope.chart

	};

}());
