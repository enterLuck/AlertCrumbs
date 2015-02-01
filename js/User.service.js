angular.module('AlertCrumbsApp')
.factory('User', ['$q', '$http', function($q, $http)
{
	return {
		score:
		{
			create: function(user)
			{
				var deferred = $q.defer();

				deferred.resolve(500);
				
				/*
				$http.post('/users', user)
				.success(function(data, status, headers, config) {
					deferred.resolve(data, status);
			  })
			  .error(function(data, status, headers, config) {
			  	deferred.reject(data, status);
			  });
			  */

			  return deferred.promise;
			},
			get: function(username)
			{
				var deferred = $q.defer();

				deferred.resolve(10);

				/*
				$http.get('/users/' + username)
				.success(function(data, status, headers, config) {
					deferred.resolve(data, status);
			  })
			  .error(function(data, status, headers, config) {
			  	deferred.reject(data, status);
			  });
				*/

				return deferred.promise;
			}
		}
	}
}]);
