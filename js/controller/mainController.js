/**
@name mainController.js
@description main page controller
@version 1.0
@date 09/06/2017
@author Vicky Madan Sundesha
*/

//Angular code
(function() {
    'use strict';

	/**
	@name mainController
	@description controls the index.html page of the angular app and sets the $rootScope.array
    where the tools are saved once every session this is used in the toolController.
	@version 1.0
	@author Vicky Madan Sundesha
	*/
	function mainController ($scope, $rootScope, dataService,$location){
        var vm = this;
        $rootScope.array;
        $rootScope.allData=[];
        $rootScope.typeArray=[];
        vm.isActive = function (viewLocation) {
             var active = (viewLocation === $location.path());
             return active;
        }


    };

    mainController.$inject = ['$scope','$rootScope','dataService','$location']

    angular
    .module('elixibilitasApp')
    .controller("mainController",mainController)

})();
