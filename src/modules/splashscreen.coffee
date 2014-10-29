angular.module("Cordova").service "$cordovaSplashscreen", ['$cordova', '$window',
	($cordova, $window) ->

		@show = () ->
			$cordova.ready().then () ->
				do $window.navigator.splashscreen.show

		@hide = () ->
			$cordova.ready().then () ->
				do $window.navigator.splashscreen.hide

		return
]