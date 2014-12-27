module.exports = function(grunt) {
  'use strict';

  // Extract the version number from the latest minified file
  var code = require('fs').readFileSync('root/firebolt.min.js', {encoding: 'utf8'});
  var version = /v(\d+\.\d+\.\d+)\b/.exec(code)[1];

  // Project configuration
  grunt.initConfig({
    copy: {
      main: {
        nonnull: true,
        expand: true,
        cwd: 'root/',
        src: ['*', 'v/' + version + '/*'],
        dest: 'dist/'
      }
    }
  });

  // Load the copy task
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Register the grunt task
  grunt.registerTask('default', ['copy']);
};
