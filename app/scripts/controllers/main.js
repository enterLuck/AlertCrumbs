'use strict';

/**
 * @ngdoc function
 * @name testerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testerAppApp
 */
angular.module('testerAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
