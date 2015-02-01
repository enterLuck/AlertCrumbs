angular.module('AlertCrumbsApp')
.controller('ScoresCtrl', [
	'$scope',
	function($scope)
	{

$scope.scoremessages = [{
      face: 'http://www.monkeybars.io/images/rani-shah.png',
      what: 'How much did you score?',
      who: 'Rani Shah',
      when: '12:08PM',
      notes: "5000 points"
    },{
      face: 'http://www.monkeybars.io/images/taylor-harvey.png',
      what: 'Superbowl today?',
      who: 'Taylor Harvey',
      when: '12:15PM',
      notes: "3999 points"
    },{
      face: 'http://www.monkeybars.io/images/emmanuel-marcha.png',
      what: 'Yes they should win!!!',
      who: 'Emmanuel Marcha',
      when: '12:19PM',
      notes: "1200 points"
    }];


    var msg = new SpeechSynthesisUtterance("I'm " + $scope.scoremessages[0].who+" Eye scored "+$scope.scoremessages[0].notes+" "+$scope.scoremessages[0].what);
    window.speechSynthesis.speak(msg);

}]);