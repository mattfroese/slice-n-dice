module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      css: {
        src: [
          'dist/css/fonts.css',
          'dist/css/main.css'
        ],
        dest: 'dist/css/style.css',
      },
    },
    less: {
      development: {
        options: {
          imports: {
            // Use the new "reference" directive, e.g.
            // @import (reference) "variables.less";
            reference: [
              "less/mixins.less",
              "less/variables.less",
              "less/fonts.less"
            ]
          }
        },
        files:{
          "dist/css/main.css": "less/main.less"
        }
      }
    },
    watch: {
      options: {
        livereload: 1337
      },
      less: {
        files: 'less/**.less',
        tasks: 'less'
      }
      // Couldnt get working yet
      // },
      // concat: {
      //   files: 'dist/css/*.css',
      //   task: 'concat'
      // }
    }
  });

  grunt.loadNpmTasks("grunt-contrib");
  grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
