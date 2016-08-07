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
            } else if(toState.name == 'menu.contact'){
                $scope.activeMenu = 'menu.contact';
            } else if(toState.name == 'menu.about'){
                $scope.activeMenu = 'menu.about';
            } else if(toState.name == 'menu.services'){
                $scope.activeMenu = 'menu.services';
            } else if(toState.name == 'menu.career'){
                $scope.activeMenu = 'menu.career';
            } else if(toState.name == 'menu.contact'){
                $scope.activeMenu = 'menu.contact';
            } else if(toState.name == 'menu.gallery'){
                $scope.activeMenu = 'menu.gallery';
            }
        });
        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') ) {
                $(this).collapse('hide');
            }
        });
    }
})();
