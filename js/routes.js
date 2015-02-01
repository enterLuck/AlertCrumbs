angular.module('speechApp')
.config(['$routeProvider', function($routeProvider)
{
	$routeProvider.
	      when('/login', {
	        templateUrl: 'partials/login.html',
	        controller: 'LoginCtrl'
	      }).
	      when('/plate', {
	        templateUrl: 'partials/plates.html',
	        controller: 'PlatesCtrl'
	      }).
	      when('/scores', {
	        templateUrl: 'partials/scores.html',
	        controller: 'ScoresCtrl'
	      }).
	      when('/profile', {
	        templateUrl: 'partials/profile.html',
	        controller: 'ProfileCtrl'
	      }).
	      otherwise({
	        redirectTo: '/login'
	      });
}])