(function () {
    'use strict';
    angular.module('goal')
            .config(function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                        .state('menu', {
                            url: '/menu',
                            templateUrl: "app/menu/menu.html",
                            controller: 'menuCtrl',
                            cache: false,
                            abstract: true,
                            controllerAs: 'menu'
                        })
                        .state('menu.home', {
                            url: '/home',
                            cache: false,
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
                            cache: false,
                            views: {
                                'menuContent': {
                                    templateUrl: "app/career/career.html",
                                    controller: 'careerCtrl',
                                    controllerAs: 'career'
                                }
                            }
                        })
                        .state('menu.about', {
                            url: '/about',
                            cache: false,
                            views: {
                                'menuContent': {
                                    templateUrl: "app/about/about.html",
                                    controller: 'aboutCtrl',
                                    controllerAs: 'about'
                                }
                            }
                        })
                        .state('menu.gallery', {
                            url: '/gallery',
                            cache: false,
                            views: {
                                'menuContent': {
                                    templateUrl: "app/gallery/gallery.html",
                                    controller: 'galleryCtrl',
                                    controllerAs: 'gallery'
                                }
                            }
                        });
                $urlRouterProvider.otherwise('/menu/home');
            });
})();