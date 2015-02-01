var speechRecognitionApp = angular.module('speechRecognition', []);

speechRecognitionApp.service('SPEECH', function(){
	return SPEECH;
})

speechRecognitionApp.factory('recognizer', ['$q', 'SPEECH', function($q, SPEECH)
{
	return {
		config: function(commands){
			if( SPEECH.isCapable() )
			{
				SPEECH.onStart(function() {
			        // fires once browser recognition has started
			    });

			    SPEECH.onStop(function() {
			        // fires when speech is manually stopped, or on error
			    });

			    SPEECH.min_confidence = .2; // the default minimum confidence you're willing to accept as a command
				
				var deferred = $q.defer();

				SPEECH.addVoiceCommands(commands);
				SPEECH.onResult(function(result){
					deferred.resolve(result);
				});
				SPEECH.start({
					min_confidence: .3
				});

				return deferred.promise
			}
			else
				return null;
		}
	};
}]);