// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ionicStarterApp', 
  [
    'ionic',
    'ngCordova',
    'firebase',
    'angular-cache',
    'nvd3',
    'nvChart',
    'cb.x2js',
    'ionicStarterApp.config',
    'ionicStarterApp.controllers',
    'ionicStarterApp.services',
    'ionicStarterApp.filters',
    'ionicStarterApp.directives',
    //'ngResource'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleHex("#ffffff");
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'mainController'
  })

  .state('app.myStocks', {
    url: '/my-stocks',
    views: {
      'menuContent': {
        templateUrl: 'templates/my-stocks.html',
        controller: 'myStocksController'
      }
    }
  })

  .state('app.stock', {
    url: '/:ticker',
    views: {
      'menuContent': {
        templateUrl: 'templates/stock.html',
        controller: 'stockController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/my-stocks');
});
