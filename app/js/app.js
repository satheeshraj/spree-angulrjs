'use strict';

/* App Module */

var spreeMarket = angular.module('spreeMarket', [
  'spreeMarketController',
  'ngRoute',
  'spreeMarketDirectives'
]);

spreeMarket.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/home', {
          templateUrl : 'partials/home.html',
          controller  : 'MainCtrl'
        })
        .when('/work', {
          templateUrl : 'partials/work.html',
          controller  : 'WorkCtrl'
        })
        .when('/services', {
            templateUrl : 'partials/services.html',
            controller  : 'ServicesCtrl'
        })
        .when('/about', {
          templateUrl : 'partials/about.html',
          controller  : 'AboutCtrl'
        })
        .when('/contact', {
            templateUrl : 'partials/contact.html',
            controller  : 'ContactCtrl'
        })
        .when('/blog', {
          templateUrl : 'partials/blog.html',
          controller  : 'BlogCtrl'
        }).
        otherwise({
          redirectTo: '/home'
        });
  }]).directive("landingPage",['$log',function($log){
    return{
        restrict:'E',
        replace:true,
        transclude:true,
        controller : ["$scope",function($scope){


        }],
        templateUrl:'partials/generic/landingPage.html',
        link:function(scope,element,attribute){
            scope.navBar = true;
            scope.navTemplate = "partials/generic/navBar.html";
            scope.footerTemplate = "partials/generic/footer.html";
            scope.$on("navBarListener",function(event,hideNavBar){
                scope.navBar = hideNavBar;
            });
        }
    }
}]);