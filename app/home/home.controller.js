(function () {
    'use strict';
    angular.module('goal')
            .controller('homeCtrl', homeCtrl);

    function homeCtrl($state, $ocLazyLoad, $timeout) {
        $ocLazyLoad.load('js/slick.js');
        $ocLazyLoad.load('js/nouislider.js');
//        $('.carousel').carousel();
        var self = this;
//        $('#slider').nivoSlider({
//            effect: 'random', // Specify sets like: 'fold,fade,sliceDown' 
//            slices: 15, // For slice animations 
//            boxCols: 8, // For box animations 
//            boxRows: 4, // For box animations 
//            animSpeed: 500, // Slide transition speed 
//            pauseTime: 3000, // How long each slide will show 
//            startSlide: 0, // Set starting Slide (0 index) 
//            directionNav: false, // Next & Prev navigation 
//            controlNav: false, // 1,2,3... navigation 
//            controlNavThumbs: false, // Use thumbnails for Control Nav 
//            pauseOnHover: true, // Stop animation while hovering 
//            manualAdvance: false, // Force manual transitions 
//            prevText: 'Prev', // Prev directionNav text 
//            nextText: 'Next', // Next directionNav text 
//            randomStart: false, // Start on a random slide 
//            beforeChange: function () {}, // Triggers before a slide transition 
//            afterChange: function () {}, // Triggers after a slide transition 
//            slideshowEnd: function () {}, // Triggers after all slides have been shown 
//            lastSlide: function () {}, // Triggers when last slide is shown 
//            afterLoad: function () {}           // Triggers when slider has loaded 
//        });

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
    }
})();