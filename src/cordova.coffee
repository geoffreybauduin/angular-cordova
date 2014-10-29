angular.module "Cordova", []

angular.module("Cordova").factory "Cordova", ['$q', '$rootScope', '$document',
	($q, $rootScope, $document) ->
		deferred = do $q.defer
		$document.bind "deviceready", () ->
			$rootScope.$apply () ->
				do deferred.resolve

		this.ready = () ->
			return deferred.promise

		return this