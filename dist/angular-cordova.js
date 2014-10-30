angular.module("Cordova", []);

angular.module("Cordova").factory("$cordova", [
  '$q', '$rootScope', '$document', function($q, $rootScope, $document) {
    var deferred;
    deferred = $q.defer();
    $document.bind("deviceready", function() {
      return $rootScope.$apply(function() {
        return deferred.resolve();
      });
    });
    this.ready = function() {
      return deferred.promise;
    };
    return this;
  }
]);

var Camera;

Camera = Camera || {
  PictureSourceType: {
    PHOTOLIBRARY: 0,
    CAMERA: 1,
    SAVEDPHOTOALBUM: 2
  },
  DestinationType: {
    DATA_URL: 0,
    FILE_URI: 1,
    NATIVE_URI: 2
  },
  EncodingType: {
    JPEG: 0,
    PNG: 1
  },
  MediaType: {
    PICTURE: 0,
    VIDEO: 1,
    ALLMEDIA: 2
  },
  Direction: {
    BACK: 0,
    FRONT: 1
  }
};

angular.module("Cordova").service("$cordovaCamera", [
  '$cordova', '$window', function($cordova, $window) {
    this.getPicture = function(successCallback, failureCallback, options) {
      return $cordova.ready().then(function() {
        return $window.navigator.camera.getPicture(successCallback, failureCallback, options);
      });
    };
    this.PictureSourceType = Camera.PictureSourceType;
    this.DestinationType = Camera.DestinationType;
    this.EncodingType = Camera.EncodingType;
    this.MediaType = Camera.MediaType;
    this.Direction = Camera.Direction;
  }
]);

angular.module("Cordova").service("$cordovaGeolocation", [
  '$cordova', '$window', function($cordova, $window) {
    this.getCurrentPosition = function(successCallback, failureCallback, options) {
      return $cordova.ready().then(function() {
        return $window.navigator.geolocation.getCurrentPosition(successCallback, failureCallback, options);
      });
    };
  }
]);

angular.module("Cordova").service("$cordovaNotification", [
  '$cordova', '$window', function($cordova, $window) {
    this.alert = function(message, callback, alert, button) {
      return $cordova.ready().then(function() {
        return $window.navigator.notification.alert(message, callback, alert, button);
      });
    };
    this.confirm = function(message, callback, alert, buttons) {
      return $cordova.ready().then(function() {
        return $window.navigator.notification.confirm(message, callback, alert, buttons);
      });
    };
  }
]);

angular.module("Cordova").service("$cordovaSplashscreen", [
  '$cordova', '$window', function($cordova, $window) {
    this.show = function() {
      return $cordova.ready().then(function() {
        return $window.navigator.splashscreen.show();
      });
    };
    this.hide = function() {
      return $cordova.ready().then(function() {
        return $window.navigator.splashscreen.hide();
      });
    };
  }
]);

angular.module("Cordova").service("$cordovaVibration", [
  '$cordova', '$window', function($cordova, $window) {
    this.vibrate = function(duration) {
      return $cordova.ready().then(function() {
        return $window.navigator.vibrate(duration);
      });
    };
  }
]);
