module.exports = function(grunt) {
  grunt.registerTask('custom', 'Say hello!', function() {
    grunt.log.writeln('OK grunt is running '+this.name+' task.');
    grunt.task.run('sass');
  });
};
