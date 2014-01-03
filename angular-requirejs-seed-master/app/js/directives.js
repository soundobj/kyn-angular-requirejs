console.log("loading directives");
define(['angular', 'services'], function(angular, services) {
	'use strict';

  /* Directives */

	angular.module('myApp.directives', ['myApp.services'])
//		.directive('appVersion', ['version', function(version) {
//			return function(scope, elm, attrs) {
//				elm.text(version);
//		};
	
	.directive('uiBar',
		    function() {
		      return {
//		        restrict: 'EAC',
		        restrict: 'E',
//		        require: '?ngModel',
		        scope: { instrument: '=' },
//		        link: function($scope, element, attrs, controller) {		       
//		        	console.log($scope.instrument);
//		          var controllerOptions, options;
//		          element.text('iambasaasar');
//		        },
		        template: '<span> Hello {{instrument[0].name}} </span>'
		      };
		    }
		  );
	
});
