module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
       // 1.
        // create build web directory
        mkdir: {
            build: {
                options: {
                    create: ['build/web']
                }
            }
        },
        // 2.
        // compile dart files
        dart2js: {
            options: {
                // use this to fix a problem into dart2js node module. The module calls dart2js not dart2js.bat.
                // this is needed for Windows. So use the path to your dart2js.bat file
                "dart2js_bin": "C:/tools/dart-sdk/bin/dart2js.bat"
            },
            compile: {
                files: {'build/web/main.dart.js': 'web/main.dart'}
            }
        },
        // 3.
        // copy all needed files, including all needed packages
        // except the .dart files.
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        src: [
                            'web/!(*.dart)',
                            'web/css/*.css',
                            'web/res/*.svg',
                            'web/packages/angular/**/!(*.dart)',
                            'web/packages/browser/**/!(*.dart)'
                        ],
                        dest: 'build'
                    }
                ]
            }
        },
        // 4.
        // remove empty directories copied using the previous task
        cleanempty: {
            build: {
                options: {
                    files: false
                },
                src: ['build/web/packages/**/*']
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Use the dart2js tool to compile Dart code to JavaScript
    //https://webdev.dartlang.org/tools/dart2js
    // Load the plugin that will compile Dart code to JavaScript
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    // Default task(s).
    grunt.registerTask('default', [
        'mkdir:build',
        'dart2js',
        'copy:build',
        'cleanempty:build'
    ]);

};