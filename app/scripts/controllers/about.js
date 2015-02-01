'use strict';

/**
 * @ngdoc function
 * @name testerAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testerAppApp
 */
angular.module('testerAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
