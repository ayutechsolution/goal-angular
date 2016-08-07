(function () {
    'use strict';
    angular.module('goal')
            .controller('galleryCtrl', galleryCtrl);

    function galleryCtrl($state, $timeout) {
        var self = this;
        angular.element('body').css('background-color', '#bfbfbf');

        $("#lightgallery").lightGallery();
    }
})();