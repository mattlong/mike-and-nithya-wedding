module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'build/style/style.css': 'sass/style.scss'
                }
            }
        },
        includes: {
            build: {
                cwd: 'html',
                src: [ '*.html'],
                dest: 'build',
                options: {
                    flatten: true,
                    includePath: 'include',
                    banner: '<!-- Site built using grunt includes! -->\n'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {cwd: '.', expand: true, src: ['images/*'], dest: 'build/'},
                ]
            }
        },
        watch: {
            html: {
                files: 'html/*.html',
                tasks: ['includes']
            },
            images: {
                files: 'images/*',
                tasks: ['copy']
            },
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['watch']);
}
