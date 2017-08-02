module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    //Compiles LESS files
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "app/css/main.min.css": ["app/less/slick.less", "app/less/slick-theme.less", "app/less/main.less"]
                }
            }
        },
    //Autoprefixer
        autoprefixer:{
            dist:{
                files:{
                    'app/css/main.min.css':'app/css/main.min.css'
                }
            }
        },
    //CSSMinificator
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'app/css/normalize.min.css': ['node_modules/normalize.css/normalize.css']
                }
            }
        },

    //Uglify files
        uglify: {
            my_target: {
                files: {
                    'app/js/main.min.js': ['app/js/main.js', 'app/js/add/*.js']
                },
            },
        },

    //Concat files
        concat: {
            basic: {
                src : ['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/owl.carousel/dist/owl.carousel.min.js', 'app/js/add/*.min.js', 'app/js/main.min.js'],
                dest : 'public/js/build.min.js',
            },
            extras: {
                src: ['app/css/normalize.min.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css', 'app/css/font-awesome.min.css', 'node_modules/owl.carousel/dist/assets/owl.carousel.min.css', 'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css', 'app/css/add/*.min.css', 'app/css/main.min.css'],
                dest: 'public/css/build.min.css',
            },
        },

    // AutoReload pages
        express: {
            all: {
                options: {
                    bases: ['app', 'public'],
                    livereload: true,
                    open: 'http://localhost:3000'
                }
            }
        },

    //Watching the files in my project
        watch: {
            styles: {
                files: ['app/**/*.less', 'app/css/**/*.css', 'app/*.html', 'app/js/*.js', 'public/*.html'],
                tasks: ['less', 'autoprefixer', 'uglify', 'concat'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    // Load the plugin task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin', 'uglify', 'concat', 'express', 'watch']);
    grunt.registerTask('test', 'cssmin');
};