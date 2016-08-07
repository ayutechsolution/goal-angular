(function () {
    'use strict';
    angular.module('goal')
            .controller('contactCtrl', contactCtrl);

    function contactCtrl($state) {
        var self = this;
        console.log('hiihi');
        angular.element('body').css('background-color', '#bfbfbf');


    }
})();