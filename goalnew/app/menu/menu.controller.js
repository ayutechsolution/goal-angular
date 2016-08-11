(function() {
    'use strict';
    angular.module('goal')
        .controller('menuCtrl', menuCtrl);

    function menuCtrl($rootScope, $scope, $state) {
        console.log($state.current.name);
        $scope.activeMenu = $state.current.name;
        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            if(toState.name == 'menu.home'){
                $scope.activeMenu = 'menu.home';
                angular.element('footer').css('position', 'inherit');
                $('html, body').animate({scrollTop : 0},0);
            } else if(toState.name == 'menu.contact'){
                $scope.activeMenu = 'menu.contact';
                angular.element('footer').css('position', 'fixed');
                $('html, body').animate({scrollTop : 0},0);
            } else if(toState.name == 'menu.about'){
                $scope.activeMenu = 'menu.about';
                angular.element('footer').css('position', 'inherit');
                $('html, body').animate({scrollTop : 0},0);
            } else if(toState.name == 'menu.services'){
                $scope.activeMenu = 'menu.services';
                angular.element('footer').css('position', 'inherit');
                $('html, body').animate({scrollTop : 0},0);
            } else if(toState.name == 'menu.career'){
                $scope.activeMenu = 'menu.career';
                angular.element('footer').css('position', 'inherit');
                $('html, body').animate({scrollTop : 0},0);
            } else if(toState.name == 'menu.contact'){
                $scope.activeMenu = 'menu.contact';
                angular.element('footer').css('position', 'inherit');
                $('html, body').animate({scrollTop : 0},0);
            } else if(toState.name == 'menu.gallery'){
                $scope.activeMenu = 'menu.gallery';
                angular.element('footer').css('position', 'inherit');
                $('html, body').animate({scrollTop : 0},0);
            }
        });
        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') ) {
                $(this).collapse('hide');
            }
        });
    }
})();
