angular.module('AlertCrumbsApp')
.controller('LicPlateCtrl', [
	'$scope',
	'$speechRecognition',
	'$speechSynthetis',
	'$mdToast',
	'User',
	'Cars',
	function($scope, $speechRecognition, $speechSynthetis, $mdToast, User, Cars)
{
    $scope.platenumber1 = "1";
    $scope.platenumber2 = "2";
    $scope.platenumber3 = "3";
    $scope.platenumber4 = "4";
    $scope.platenumber5 = "5";
    $scope.platenumber6 = "6";
	$scope.platenumber7 = "7";

	$speechRecognition.onstart(function(){
	  //$speechSynthetis.speak('Yes? How can I help you?', 'en-US');
      speech = $speechSynthetis;
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
            	console.log(e, ":" + $scope.platenumber1+$scope.platenumber2+$scope.platenumber3+$scope.platenumber4+
                    $scope.platenumber5+$scope.platenumber6+$scope.platenumber7);
            	$scope.platenumber1 = e.substr(6,1);
                $scope.platenumber2 = e.substr(7,1);
                $scope.platenumber3 = e.substr(8,1);
                $scope.platenumber4 = e.substr(9,1);
                $scope.platenumber5 = e.substr(10,1);
                $scope.platenumber6 = e.substr(11,1);
                $scope.platenumber7 = e.substr(12,1);
                // $scope.platenumber7 = e.substr(5,e.length); //real implementation needs e.length
            	$scope.$digest();
            }
        },
        {
            'regex': /^reset/gi,
            'lang': 'en-US',
            'call': function(){
                $scope.platenumber1 = "";
                $scope.platenumber2 = "";
                $scope.platenumber3 = "";
                $scope.platenumber4 = "";
                $scope.platenumber5 = "";
                $scope.platenumber6 = "";
            	$scope.platenumber7 = "";
            	$scope.$digest();
            }
        },
        {
            'regex': /^clear/gi,
            'lang': 'en-US',
            'call': function(){
                $scope.platenumber1 = "";
                $scope.platenumber2 = "";
                $scope.platenumber3 = "";
                $scope.platenumber4 = "";
                $scope.platenumber5 = "";
                $scope.platenumber6 = "";
            	$scope.platenumber7 = "";
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

            	Cars.send($scope.platenumber1+$scope.platenumber2+$scope.platenumber3+$scope.platenumber4+
                            $scope.platenumber5+$scope.platenumber6+$scope.platenumber7)
            	.then(function(data, status){
                    console.log(data, status);

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