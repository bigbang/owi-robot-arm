module.exports = function (grunt) {

    grunt.initConfig({
        run: {
            workout: {
                args: ['./examples/workout.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('workout', ['run:workout']);
}