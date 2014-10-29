module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vars: {
            timestamp: new Date().getTime(),
            utcDate: new Date().toUTCString()
        },
        coffee: {
            compile: {
                options: {
                    bare: true
                },
                files: {
                    'dist/angular-cordova.js' : ["src/cordova.coffee", "src/modules/*.coffee"]
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> version <%= pkg.version %> <%= vars.utcDate %> */\n',
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