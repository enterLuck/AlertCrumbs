angular.module('AlertCrumbsApp')
.controller('HeaderCtrl', [
	'$scope',
	'$location',
	function($scope, $location)
{
	$scope.$on('$locationChangeSuccess',function()
	{
		$scope.hide = true;

		if('/login' == $location.path())
		{
			$scope.hide = true;
		}
		else
		{
			$scope.hide = false;
		}
	})
}]);