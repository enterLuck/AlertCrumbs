var speechApp = angular.module('speechApp', ['adaptive.speech', 'ngMaterial']);

speechApp.factory('User', ['$q', function($q)
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

speechApp.factory('Cars', ['$q', function($q)
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

speechApp.controller('mainCtrl', [
	'$scope',
	'$speechRecognition',
	'$speechSynthetis',
	'$mdToast',
	'User',
	'Cars',
	function($scope, $speechRecognition, $speechSynthetis, $mdToast, User, Cars)
{
	$scope.platenumber = "123";

	$speechRecognition.onstart(function(){
	  //$speechSynthetis.speak('Yes? How can I help you?', 'en-US');
	});
	$speechRecognition.onerror(function(error){
		console.log("error:" ,error);
	});
	$speechRecognition.setLang('en-US'); // Default value is en-US

	$scope.recognition = {};
    $scope.recognition['en-US'] = {
        'commands': [{
            'regex': /^plate .+/gi,
            'lang': 'en-US',
            'call': function(e){
            	console.log(e, ":" + $scope.platenumber);
            	$scope.platenumber = e.substr(5,e.length);
            	$scope.$digest();
            }
        },
        {
            'regex': /^reset/gi,
            'lang': 'en-US',
            'call': function(){
            	$scope.platenumber = "";
            	$scope.$digest();
            }
        },
        {
            'regex': /^clear/gi,
            'lang': 'en-US',
            'call': function(){
            	$scope.platenumber = "";
            	$scope.$digest();
            }
        },
        {
            'regex': /^submit/gi,
            'lang': 'en-US',
            'call': function(){

				$mdToast.show(
					$mdToast.simple()
			        .content('Sending...')
			        .position('bottom left')
			        .hideDelay(1000)
			    );

            	Cars.send($scope.platenumber)
            	.then(function(points){
					$mdToast.show(
						$mdToast.simple()
				        .content('You just earned ' + points + ' points!')
				        .position('bottom left')
				        .hideDelay(1000)
			        );
            	})
            }
        },
        {
            'regex': /^list my score/gi,
            'lang': 'en-US',
            'call': function(){
            	User.score.get()
            	.then(function(score)
            	{
            		$mdToast.show(
		            	$mdToast.simple()
				        .content('Score: ' + score)
				        .position('bottom left')
				        .hideDelay(2000)
				    );
            	})
            }
        }]
    };

    $speechRecognition.listenUtterance($scope.recognition['en-US']['commands']);

	$speechRecognition.listen();
}])