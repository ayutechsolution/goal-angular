(function () {
    'use strict';
    angular.module('goal')
            .controller('aboutCtrl', aboutCtrl);

    function aboutCtrl($state, $timeout) {
        var self = this;
        console.log('about');
        self.about1 = false;
        self.about2 = false;
        self.about3 = false;
        self.about4 = false;
        angular.element('body').css('background-color', '#bfbfbf');
        $timeout(function () {
            self.about1 = true;
            $('#about1').addClass('animated fadeInLeft');
            $('#about1').css('background-color', '#fff');
        }, 1000);
        $timeout(function () {
            self.about2 = true;
            $('#about2').addClass('animated fadeInRight');
            $('#about2').css('background-color', '#fff');
        }, 2000);
        $timeout(function () {
            self.about3 = true;
            $('#about3').addClass('animated fadeInLeft');
            $('#about3').css('background-color', '#fff');
        }, 3000);
        $timeout(function () {
            self.about4 = true;
            $('#about4').addClass('animated fadeInRight');
            $('#about4').css('background-color', '#fff');
        }, 4000);
    }
})();