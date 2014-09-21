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
                }
            }
        },
        cssmin : {
            css:{
                src: 'web/css/all.css',
                dest: 'web/css/all.min.css'
            }
        },
        concat: {
            js : {
                src : [
                    'web/js/jquery.min.js', 
                    'web/js/*.js', 
                    '!web/js/script.js',
                    '!web/js/kinetic-v5.1.0.js', 
                    '!web/js/kinetic-v5.1.0.custom.min.js',
                    'web/js/script.js',
                    '!web/js/all.js',
                    '!web/js/all.min.js'
                ],
                dest : 'web/js/all.js'
            }
        },
        uglify : {
            js: {
                files: {
                    'web/js/all.min.js' : [ 'web/js/all.js' ]
                }
            }
        },
        watch: {
           files: ['web/css/scss/*', 'web/js/*'],
           tasks: ['sass', 'concat', 'cssmin']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [ 'sass', 'cssmin:css', 'concat:js', 'uglify:js' ]);
};
