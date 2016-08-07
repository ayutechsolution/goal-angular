(function() {
    'use strict';
    angular.module('goal')
        .controller('propertyCtrl', propertyCtrl);

    function propertyCtrl($stateParams) {
        var self = this;
        console.log($stateParams.id)
        if($stateParams.id == 1){
        	self.property1 = true;
        } else{
        	self.property1 = false;
        }
        angular.element('body').css('background-color', '#bfbfbf');
    }
})();