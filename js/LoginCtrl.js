angular.module('AlertCrumbsApp')
.controller('LoginCtrl', [
	'$scope',
	function($scope)
{
	$scope.user = {};
	$scope.user.name = "jeff";
	$scope.user.password = undefined;
}]);