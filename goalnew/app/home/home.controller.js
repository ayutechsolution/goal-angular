(function () {
    'use strict';
    angular.module('goal')
            .controller('homeCtrl', homeCtrl);

    function homeCtrl($state, $ocLazyLoad) {
        $ocLazyLoad.load('js/main.js');
        var self = this;
        $( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
	});
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