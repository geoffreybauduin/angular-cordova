module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vars: {
            timestamp: new Date().getTime()
        },
        coffee: {
            compile: {
                files: {
                    'dist/angular-cordova.js' : ["src/*.coffee"]
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= vars.timestamp %> */\n',
                mangle: true
            },
            app: {
                files: {
                    'dist/angular-cordova.min.js': ["dist/angular-cordova.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.registerTask('build', ['coffee', 'uglify']);


};