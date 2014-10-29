angular.module("Cordova").service "$cordovaVibration", ['$cordova', '$window',
	($cordova, $window) ->
		@vibrate = (duration) ->
			$cordova.ready().then () ->
				$window.navigator.vibrate duration
]