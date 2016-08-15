;(function() {

  'use strict';

  /**
   * Main navigation, just a HTML template
   * @author Jozef Butko
   * @ngdoc  Directive
   *
   * @example
   * <main-nav><main-nav/>
   *
   */
  moduleObj.directive("mainNavDirective",function()
  {
	  
	  var directiveObj = {};
	  directiveObj.restrict = "EA";
	  directiveObj.templateUrl = "components/directives/main-nav.html";
	  directiveObj.replace = false;
	  return directiveObj;
  }
  
})();