(function () {
    'use strict';
    angular.module('goal')
            .controller('homeCtrl', homeCtrl);

    function homeCtrl($state, $ocLazyLoad) {
        $ocLazyLoad.load('js/main.js');
        var self = this;

        $(document).ready(function () {
            $('.clientSlider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                centerMode:true,
                pauseOnHover:false,
            });
        });

    }
})();