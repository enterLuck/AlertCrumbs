var AlertCrumbsApp = angular.module('AlertCrumbsApp',['ngMaterial', 'ngMessages']);

var AlertCrumbsApp = angular.module('AlertCrumbsApp',[]);
var AlertCrumbsCtrl = AlertCrumbsApp.controller('AlertCrumbsCtrl',['$scope',function($scope){
	$scope.appname="Alert Crumbs App";
	// $scope.licplates=['first','second','third','fourth','fifth','sixth','seventh'];
}]);

  // $scope.lic = {
  //   pos1: 'Developer',
  //   pos2: 'ipsum@lorem.com'
  // };


// AlertCrumbsCtrl('LoginCtrl',['$scope','$routeParams',
// 	function($scope,$routeParams){
// 		$scope.username = $routeParams.username;
// 		$scope.password = $routeParams.password;
// 	}]);
// AlertCrumbsCtrl('LicPlateCtrl',['$scope','$routeParams',
// 	function($scope,$routeParams){
// 		$scope.licplate = $routeParams.licplate;
// 	}]);
// AlertCrumbsCtrl('NotifyCtrl',['$scope','$routeParams',
// 	function($scope,$routeParams){
// 		$scope.notify = $routeParams.notify;
// 	}]);
// AlertCrumbsCtrl('NotifyReturnCtrl',['$scope','$routeParams',
// 	function($scope,$routeParams){
// 		$scope.notifyreturn = $routeParams.notifyreturn;
// 	}]);

// AlertCrumbsApp.config(['$routeProvider',
// 	function($routeProvider){
// 		when('/login',{
// 			templateUrl: '/partials/login.html',
// 			controller: 'LoginCtrl'
// 		}).
// 		when('/lic-plate',{
// 			templateUrl: '/partials/lic-plate.html',
// 			controller: 'LicPlateCtrl'
// 		}).
// 		when('/notify',{
// 			templateUrl: '/partials/notify.html',
// 			controller: 'NotifyCtrl'
// 		}).
// 		when('/notify-return/:alertID',{
// 			templateUrl: '/partials/notify-return.html',
// 			controller: 'NotifyReturnCtrl'
// 		}).
// 		otherwise({
// 			redirectTo: '/lic-plate'
// 		});
// 	}]);