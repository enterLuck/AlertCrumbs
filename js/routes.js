angular.module('AlertCrumbsApp')
.config(['$routeProvider', function($routeProvider)
{
	$routeProvider.
	      when('/login', {
	        templateUrl: 'partials/login-view.html',
	        controller: 'LoginCtrl'
	      }).
		when('/lic-plate',{
			templateUrl: 'partials/lic-plate-view.html',
			controller: 'LicPlateCtrl'
		}).
	      when('/scores', {
	        templateUrl: 'partials/scores-view.html',
	        controller: 'ScoresCtrl'
	      }).
	      when('/profile', {
	        templateUrl: 'partials/profile-view.html',
	        controller: 'ProfileCtrl'
	      }).
		when('/notify',{
			templateUrl: 'partials/notify-view.html',
			controller: 'NotifyCtrl'
		}).
		when('/notify-return/:alertID',{
			templateUrl: 'partials/notify-return-view.html',
			controller: 'NotifyReturnCtrl'
		}).
		otherwise({
			redirectTo: 'lic-plate'
		});
}]);