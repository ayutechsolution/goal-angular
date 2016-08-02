(function() {
    'use strict';
    angular.module('goal')
            .config(function($stateProvider, $urlRouterProvider) {
                $stateProvider
                        .state('menu', {
                            url: '/menu',
                            templateUrl: "app/menu/menu.html",
                            controller: 'menuCtrl',
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
                        .state('menu.about', {
                            url: '/about',
                            cache:false,
                            views: {
                              'menuContent': {
                                templateUrl: "app/about/about.html",
                                controller: 'aboutCtrl',
                                controllerAs: 'about'
                              }
                            }
                        })
                        .state('menu.contact', {
                            url: '/contact',
                            cache:false,
                            views: {
                              'menuContent': {
                                templateUrl: "app/contact/contact.html",
                                controller: 'contactCtrl',
                                controllerAs: 'contact'
                              }
                            }
                        })
                        .state('menu.property', {
                            url: '/property/:id',
                            cache:false,
                            views: {
                              'menuContent': {
                                templateUrl: "app/property/property.html",
                                controller: 'propertyCtrl',
                                controllerAs: 'property'
                              }
                            }
                        });
                $urlRouterProvider.otherwise('/menu/home');
            });
})();