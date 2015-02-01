angular.module('AlertCrumbsApp')
.controller('NotifyCtrl', [
	'$scope',
    '$speechRecognition',
    '$geolocation',
    'Cars',
    '$location',
	function($scope,$speechRecognition, $geolocation, Cars, $location)
{
    $scope.alertmessage = "There is an Alert on this vehicle! Would you like to send location to authorities?";

    var msg = new SpeechSynthesisUtterance($scope.alertmessage);
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
                var location = $geolocation.getCurrentPosition({ timeout: 60000 });
                Cars.geolocate(location)
                .then(function()
                {
                    //thanks
                    $location.path('/notify-return');
                },
                function()
                {
                    //error
                    $location.path('/lic-plate');
                })
            }
        },
        {
            'regex': /^no/gi,
            'lang': 'en-US',
            'call': function(e){
                $location.path('/lic-plate');
            }
        }
        ]
    };

    $speechRecognition.listenUtterance($scope.recognition['en-US']['commands']);

    $speechRecognition.listen();
}
]);