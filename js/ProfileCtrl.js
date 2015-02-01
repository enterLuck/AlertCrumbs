angular.module('AlertCrumbsApp')
.controller('ProfileCtrl', [
	'$scope',
	function($scope)
	{
		$scope.email = "technexus@gmail.com";
		$scope.firstName = "Rani";
		$scope.lastName = "Shah";
		$scope.address = "20 North Upper Wacker Drive 1200";
		$scope.city = "Chicago";
		$scope.state = "IL";
		$scope.postalCode = "60606";
	}
]);