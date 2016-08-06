(function() {
    'use strict';
    angular.module('goal')
        .controller('careerCtrl', careerCtrl);

    function careerCtrl($state) {
        var self = this;
        console.log('about');
        angular.element('body').css('background-color', '#bfbfbf');
    }
})();