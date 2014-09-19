module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
               src: [
                     'web/css/*', '!web/css/all.css', '!web/css/all.min.css'
                    ],
                dest: 'web/css/all.css'
            },
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
        cssmin : {
            css:{
                src: 'web/css/all.css',
                dest: 'web/css/all.min.css'
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
           files: ['web/css/*', 'web/js/*'],
           tasks: ['concat', 'cssmin', 'uglify']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js' ]);
};
