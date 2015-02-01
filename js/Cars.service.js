angular.module('AlertCrumbsApp')
.factory('Cars', ['$q', '$http', function($q, $http)
{
	return {
		geolocate: function(location)
		{
			var deferred = $q.defer();

			//deferred.resolve(500);
			console.log(location);
			
				$http.post('/geolocation/' + location)
				.success(function(data, status, headers, config) {
					deferred.resolve(data, status);
			  })
			  .error(function(data, status, headers, config) {
			  	deferred.reject(data, status);
			  });

			return deferred.promise;

		},
		send: function(plate)
		{
			var deferred = $q.defer();

			//deferred.resolve(500);
			console.log(plate);
			
				$http.get('/cars/' + plate)
				.success(function(data, status, headers, config) {
					deferred.resolve(data, status);
			  })
			  .error(function(data, status, headers, config) {
			  	deferred.reject(data, status);
			  });

			return deferred.promise;
		}
	}
}])