(function() {
    'use strict';
    angular.module('goal')
            .config(function($stateProvider, $urlRouterProvider) {
                $stateProvider
                        .state('menu', {
                            url: '/menu',
                            templateUrl: "app/menu/menu.html",
                            // controller: 'homeCtrl',
                            cache:false,
                            abstract:true
                            // controllerAs: 'home'
                        })
                        .state('menu.home', {
                            url: '/home',
                            cache:false,
                            views: {
                              'menuContent': {
                                templateUrl: "app/home/home.html",
                                controller: 'homeCtrl',
                                controllerAs: 'home'
                              }
                            }
                        })
                        .state('menu.career', {
                            url: '/career',
                            cache:false,
                            views: {
                              'menuContent': {
                                templateUrl: "app/career/career.html",
                                controller: 'careerCtrl',
                                controllerAs: 'career'
                              }
                            }
                        });
                $urlRouterProvider.otherwise('/menu/home');
            });
})();