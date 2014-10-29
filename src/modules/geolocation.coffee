angular.module("Cordova").service "$cordovaGeolocation", ['$cordova', '$window',
	($cordova, $window) ->
		@getCurrentPosition = (successCallback, failureCallback, options) ->
			$cordova.ready().then () ->
				$window.navigator.geolocation.getCurrentPosition successCallback, failureCallback, options

		return
]