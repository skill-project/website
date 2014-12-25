module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {                                                      // Task
            dist: {                                                 // Target
                options: {                                          // Target options
                    style: 'expanded'
                },
                files: {                                            // Dictionary of files
                    'web/css/all.css': 'web/css/scss/style.scss',       // 'destination': 'source'
                    'web/css/editor.css': 'web/css/scss/editor.scss'
                }
            }
        },
        cssmin : {
            main:{
                src: 'web/css/all.css',
                dest: 'web/css/all.min.css'
            },
            editor:{
              src: 'web/css/editor.css',
              dest: 'web/css/editor.min.css'  
            }
        },
        concat: {
            js : {
                src : [
                    'web/js/jquery-2.1.1.min.js', 
                    'web/js/jquery-ui.min.js', 
                    'web/js/jquery.mousewheel.min.js',
                    'web/js/jquery.highlight.js',
                    'web/js/jquery.simplemodal-1.4.4.js',
                    'web/js/jquery.tourbus.js',
                    'web/js/jquery.tinyscrollbar.js',
                    'web/js/kinetic-v5.1.0.custom.min.js',
                    'web/js/canvas-loader.min.js',
                    'web/js/autobahn.js',
                    'web/js/jquery.waypoints.js',
                    'web/js/countUp.js',
                    'web/js/compatibility.js',
                    'web/js/functions.js',
                    'web/js/Site.js',
                    'web/js/Node.js',
                    'web/js/Node.prototypes.js',
                    'web/js/Edge.js',
                    'web/js/Tree.js',
                    'web/js/Panel.js',
                    'web/js/Camera.js',
                    'web/js/Search.js',
                    'web/js/User.js',
                    'web/js/Tour.js',
                    'web/js/Loader.js',
                    'web/js/FPSCounter.js',
                    'web/js/Editor.js',
                    'web/js/script.js'
                ],
                dest : 'web/js/all.js',
                nonull: true
            }
        },
        uglify : {
            options: {
                compress: {
                    warnings: true,
                    unused: true
                }
            },
            js: {
                files: {
                    'web/js/all.min.js' : [ 'web/js/all.js' ]
                }
            }
        },
        watch: {
           files: ['web/css/scss/*'],
           tasks: ['sass']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [ 'sass', 'cssmin:main', 'cssmin:editor', 'concat:js', 'uglify:js' ]);
};
