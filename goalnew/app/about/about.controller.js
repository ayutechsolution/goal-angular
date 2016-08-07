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
            $('#about1').css('background-color', '#34495e');
// =======
//             $('#about1').css({'background-color': '#34495e', 'color':'#fff'});
// >>>>>>> 26a74d472e70fcb9c4c6e0fef8667c783e72485c
        }, 1000);
        $timeout(function () {
            self.about2 = true;
            $('#about2').addClass('animated fadeInRight');
            $('#about2').css('background-color', '#34495e');
// =======
//             $('#about2').css({'background-color': '#34495e', 'color':'#fff'});
// >>>>>>> 26a74d472e70fcb9c4c6e0fef8667c783e72485c
        }, 2000);
        $timeout(function () {
            self.about3 = true;
            $('#about3').addClass('animated fadeInLeft');
            $('#about3').css('background-color', '#34495e');
// =======
//             $('#about3').css({'background-color': '#34495e', 'color':'#fff'});
// >>>>>>> 26a74d472e70fcb9c4c6e0fef8667c783e72485c
        }, 3000);
        $timeout(function () {
            self.about4 = true;
            $('#about4').addClass('animated fadeInRight');
            $('#about4').css('background-color', '#34495e');
// =======
//             $('#about4').css({'background-color': '#34495e', 'color':'#fff'});
// >>>>>>> 26a74d472e70fcb9c4c6e0fef8667c783e72485c
        }, 4000);
    }
})();