angular.module('AlertCrumbsApp')
.factory('Cars', ['$q', '$http', function($q, $http)
{
	return {
		send: function(plate)
		{
			var deferred = $q.defer();

			deferred.resolve(500);
			/*
			$http.get({
				options: 'Cars/license$'

			})
*/

			return deferred.promise;
		}
	}
}])