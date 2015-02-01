angular.module('AlertCrumbsApp')
.factory('Cars', ['$q', '$http', function($q, $http)
{
	return {
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