(function() {
    'use strict';
    angular.module('goal')
        .controller('homeCtrl', homeCtrl);

    function homeCtrl($state, $ocLazyLoad) {
        $ocLazyLoad.load('js/main.js');
        var self = this;
        console.log('hiihi');
    }
})();