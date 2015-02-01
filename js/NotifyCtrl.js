angular.module('AlertCrumbsApp')
.controller('NotifyCtrl', [
	'$scope',
    '$speechRecognition',
	function($scope,$speechRecognition)
{

    var msg = new SpeechSynthesisUtterance("There is an Alert on this vehicle! Would you like to send location to authorities?");
    window.speechSynthesis.speak(msg);


    $speechRecognition.onerror(function(error){
        console.log("error:" ,error);
    });
    $speechRecognition.setLang('en-US'); // Default value is en-US

    $scope.recognition = {};
    $scope.recognition['en-US'] = {
        'commands': [{
            'regex': /^yes/gi,
            'lang': 'en-US',
            'call': function(e){
                $scope.$digest();
            }
        },
        {
            'regex': /^no/gi,
            'lang': 'en-US',
            'call': function(e){
                $scope.$digest();
            }
        }
        ]
    };

    $speechRecognition.listenUtterance($scope.recognition['en-US']['commands']);

    $speechRecognition.listen();
}
]);