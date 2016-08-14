(function () {
    'use strict';
    angular.module('goal')
            .controller('homeCtrl', homeCtrl);

    function homeCtrl($state, $ocLazyLoad, $timeout) {
            $('.fullwidthbanner').revolution(
                    {
                        delay: 5000,
                        startwidth: 890,
                        startheight: 450,
                        onHoverStop: "off", // Stop Banner Timet at Hover on Slide on/off
                        thumbWidth: 100, // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
                        thumbHeight: 50,
                        thumbAmount: 4,
                        hideThumbs: 200,
                        navigationType: "both", //bullet, thumb, none, both     (No Shadow in Fullwidth Version !)
                        navigationArrows: "verticalcentered", //nexttobullets, verticalcentered, none
                        navigationStyle: "round", //round,square,navbar
                        touchenabled: "on", // Enable Swipe Function : on/off
                        navOffsetHorizontal: 0,
                        navOffsetVertical: 20,
                        fullWidth: "on",
                        shadow: 0                                //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
                    });


            $('.flexslider').flexslider({
                animation: "slide",
                animationLoop: false,
                itemWidth: 205,
                itemMargin: 20,
                minItems: 1,
                maxItems: 4
            });
    }
})();