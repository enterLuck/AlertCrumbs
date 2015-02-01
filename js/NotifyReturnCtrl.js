angular.module('AlertCrumbsApp')
.controller('NotifyReturnCtrl', [
	'$scope'
	'$mdToast',
	function($scope,$mdToast)
{
	$scope.thankmessage="Thank you for your assistance!";

    var msg = new SpeechSynthesisUtterance($scope.thankmessage);
    window.speechSynthesis.speak(msg);
}
]);