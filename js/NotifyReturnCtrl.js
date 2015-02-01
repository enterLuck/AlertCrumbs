angular.module('AlertCrumbsApp')
.controller('NotifyReturnCtrl', [
	'$scope'
	'$mdToast',
	function($scope,$mdToast)
{

    var msg = new SpeechSynthesisUtterance("Thank you for your assistance!");
    window.speechSynthesis.speak(msg);
}
]);