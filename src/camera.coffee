Camera = Camera ||
    PictureSourceType:
        PHOTOLIBRARY: 0
        CAMERA: 1
        SAVEDPHOTOALBUM: 2
    DestinationType:
        DATA_URL: 0
        FILE_URI: 1
        NATIVE_URI: 2
    EncodingType:
        JPEG: 0
        PNG: 1
    MediaType:
        PICTURE: 0
        VIDEO: 1
        ALLMEDIA: 2
    Direction:
        BACK: 0
        FRONT: 1

angular.module("Cordova").service "$cordovaCamera", ['$cordova', '$window',
    ($cordova, $window) ->

        @getPicture = (successCallback, failureCallback, options) ->
            $cordova.ready().then () ->
                $window.navigator.camera.getPicture successCallback, failureCallback, options

        @PictureSourceType = Camera.PictureSourceType
        @DestinationType = Camera.DestinationType
        @EncodingType = Camera.EncodingType
        @MediaType = Camera.MediaType
        @Direction = Camera.Direction

        return

]