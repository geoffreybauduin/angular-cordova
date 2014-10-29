# angular-cordova

**Cordova bindings for AngularJS**

## How to install this plugin ?

```
bower install angularjs-cordova
```

### How to use ?

Add the module to your dependencies
```
angular.module("app", ['Cordova']);
```

You can use `$cordova` factory to know when cordova has fired `deviceready`:

```
angular.module("app").run(function ($cordova) {
  $cordova.ready().then(function () {
    alert("Device is ready");
  });
});
```

### Modules

#### org.apache.cordova.camera

https://github.com/apache/cordova-plugin-camera

**$cordovaCamera.getPicture**

This function takes a picture using the camera. It wraps the call to `navigator.camera.getPicture`

```
$cordovaCamera.getPicture( cameraSuccess, cameraError, cameraOptions );
```


#### org.apache.cordova.dialogs
https://github.com/apache/cordova-plugin-dialogs

**$cordovaNotification.confirm**

This function provides a notification box with 2 buttons. It wraps the call to `navigator.notification.confirm`

```
$cordovaNotification.confirm( message, confirmCallback, [title], [buttonLabels] );
```

**$cordovaNotification.alert**

This function provides a notification box with 1 button. It wraps the call to `navigator.notification.alert`

```
$cordovaNotification.alert(message, alertCallback, [title], [buttonName]);
```


#### org.apache.cordova.vibration

https://github.com/apache/cordova-plugin-vibration

**$cordovaVibration.vibrate**


This function triggers the phone vibration. It wraps the call to `navigator.vibrate`

```
$cordovaVibration.vibrate( duration );
```

#### org.apache.cordova.splashscreen
https://github.com/apache/cordova-plugin-splashscreen

**$cordovaSplashscreen.show**
This function shows the Splashscreen. It wraps the call to `navigator.splashscreen.show`
```
$cordovaSplashscreen.show();
```

**$cordovaSplashscreen.hide**
This function hides the Splashscreen. It wraps the call to `navigator.splashscreen.hide`

```
$cordovaSplashscreen.hide();
```

#### org.apache.cordova.geolocation

https://github.com/apache/cordova-plugin-geolocation

**$cordovaGeolocation.getCurrentPosition**
This function retrieves the current position of the device. It wraps the call to `navigator.geolocation.getCurrentPosition`.

```
$cordovaGeolocation.getCurrentPosition(onSuccess, onError);
```

## Contributing

To contribute, fork this repository. Create a pull request to request a merge (obvious right ?).

#### How to clone and prepare the dependencies ?

```
git clone git@github.com:xx/angular-cordova
cd angular-cordova
npm install
```

#### How to build ?

```
grunt build
```

# LICENSE

This project is under Apache License (since AngularJS is under this one).