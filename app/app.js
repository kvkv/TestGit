/**
 * 
 * AngularJS Boilerplate
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 * 
 */
;(function() {

  /**
   * Definition of the main app module and its dependencies
   */
 var moduleObj = angular.module("mainModule",[]);
 
 //configure routes
 moduleObj.config(function($routeProvider)
 {
	 
	 $routeProvider
	 .when("/Map",
	 {
		 templateUrl:"views/map.html",
		 controller:"mapController"
	 })
	 .when("/Chart",
	 {
		 templateUrl:"views/chart.html",
		 controller:"chartController"
	 });
 }
 
 
})();