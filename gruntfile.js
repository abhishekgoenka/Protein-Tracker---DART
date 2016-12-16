module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        dart2js: {
            options: {
                // Task-specific options go here. 
            },
            your_target: {
                // Target-specific file lists and/or options go here. 
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Use the dart2js tool to compile Dart code to JavaScript
    //https://webdev.dartlang.org/tools/dart2js
    // Load the plugin that will compile Dart code to Ja
    grunt.loadNpmTasks('grunt-dart2js');


    // Default task(s).
    grunt.registerTask('default', ["dart"]);

};