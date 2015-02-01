angular.module('speechApp')
.factory('User', ['$q', function($q)
{
	return {
		score:
		{
			get: function()
			{
				var deferred = $q.defer();

				deferred.resolve(10);

				return deferred.promise;
			}
		}
	}
}]);
