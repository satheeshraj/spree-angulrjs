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
  }]);
