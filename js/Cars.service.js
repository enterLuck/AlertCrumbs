angular.module('speechApp')
.factory('Cars', ['$q', function($q)
{
	return {
		send: function(plate)
		{
			var deferred = $q.defer();

			deferred.resolve(500);

			return deferred.promise;
		}
	}
}])