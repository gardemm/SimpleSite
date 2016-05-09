(function() {
    'use strict';

    angular
        .module('SSite')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/scripts/pages/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .state('report', {
                url: '/report',
                templateUrl: '/scripts/pages/report/report.html',
                controller: 'ReportCtrl',
                controllerAs: 'report'
            })
            .state('analytic', {
                url: '/analytic',
                templateUrl: '/scripts/pages/analytic/analytic.html',
                controller: 'AnalyticCtrl',
                controllerAs: 'analytic'
            })

        $urlRouterProvider.otherwise('/');
    }

}());