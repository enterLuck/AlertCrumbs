angular.module('AlertCrumbsApp')
.factory('User', ['$q', '$http', function($q, $http)
{
	return {
		score:
		{
			create: function(user)
			{
				//$http.post(user)
			},
			get: function()
			{
				var deferred = $q.defer();

				deferred.resolve(10);

				return deferred.promise;
			}
		}
	}
}]);
