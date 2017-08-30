module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    //Compiles LESS files
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "public/css/main.min.css": "app/assets/less/styles.less"
        }
      }
    },
    //Autoprefixer
    autoprefixer: {
      dist: {
        files: {
          'public/css/main.min.css': 'public/css/main.min.css'
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
          'public/css/main.min.css': 'public/css/main.min.css'
        }
      }
    },

    uglify: {
      my_target: {
        // options : {
        //   sourceMap : true
        // },
        files: {
          'public/js/build.min.js': 'app/assets/js/build.js'
        }
      }
    },

    browserify: {
      build: {
        src: 'app/assets/js/index.js',
        dest: 'app/assets/js/build.js'
      }
    },

    //Watching the files in my project
    watch: {
      styles: {
        files: ['app/assets/less/*.less', 'app/assets/js/*.js'],
        tasks: ['less', 'autoprefixer'],
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin', 'browserify', 'uglify', 'watch']);
};