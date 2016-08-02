(function() {
    'use strict';
    angular.module('goal')
        .controller('homeCtrl', homeCtrl);

    function homeCtrl($state, $ocLazyLoad) {
        $ocLazyLoad.load('js/slick.js');
        $ocLazyLoad.load('js/nouislider.js');
        $('.carousel').carousel();

        var self = this;
        console.log('hiihi');
    }
})();