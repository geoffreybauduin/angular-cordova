angular.module "Cordova", []

angular.module("Cordova").factory "$cordova", ['$q', '$rootScope', '$document',
	($q, $rootScope, $document) ->
		deferred = do $q.defer
		$document.bind "deviceready", () ->
			$rootScope.$apply () ->
				do deferred.resolve

		@ready = () ->
			return deferred.promise

		return @

]