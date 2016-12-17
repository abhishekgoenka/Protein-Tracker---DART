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
                files: { 'build/web/main.dart.js': 'web/main.dart' }
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
        web_server: {
            options: {
                cors: true,
                port: 8000,
                nevercache: true,
                logRequests: true
            },
            foo: 'bar' // For some reason an extra key with a non-object value is necessary 
        },
        open: {
            dev: {
                path: 'http://127.0.0.1:8000/web/index.html',
                //app: 'Google Chrome'
            },
            build: {
                path: 'http://google.com/',
                app: 'Firefox'
            },
            file: {
                path: '/etc/hosts'
            },
            custom: {
                path: function () {
                    return grunt.option('path');
                }
            }
        }
    });

    //Without matchdep, we would have to write grunt.loadNpmTasks("grunt-task-name"); 
    //for each dependency, which would quickly add up as we find and install other plugins.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    // Default task(s).
    grunt.registerTask('default', [
        'mkdir:build',
        'dart2js',
        'copy:build',
        'cleanempty:build',
        'open:dev',
        'web_server',
        
    ]);

};