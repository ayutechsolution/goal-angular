(function() {
    'use strict';
    angular.module('goal')
        .controller('aboutCtrl', aboutCtrl);

    function aboutCtrl($state) {
        var self = this;
        console.log('about');
//        angular.element('body').css('background-color', '#bfbfbf');
    }
})();