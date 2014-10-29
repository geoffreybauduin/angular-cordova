angular.module("Cordova").service "$cordovaNotification", ['$cordova', '$window',
	($cordova, $window) ->

		@alert = (message, callback, alert, button) ->
			$cordova.ready().then () ->
				$window.navigator.notification.alert message, callback, alert, button

		@confirm = (message, callback, alert, buttons) ->
			$cordova.ready().then () ->
				$window.navigator.notification.confirm message, callback, alert, button

		return

]