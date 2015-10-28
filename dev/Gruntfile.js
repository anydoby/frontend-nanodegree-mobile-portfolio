module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, src: ['img/*', 'views/images/*'], dest: '../prod'},
        ],
      },
    },
    htmlmin: {                                     
      portfolio: {                                      
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   
          '../prod/index.html': 'index.html',    
        }
      },
      pizzas: {                 
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          '../prod/views/pizza.html': 'views/pizza.html',
        }
      }
    },
    uglify: {
        min: {
            files: grunt.file.expandMapping(['js/*.js', 'views/**/*.js'], '../prod/', {
                rename: function(destBase, destPath) {
                    return destBase+destPath;
                }
            })
        }
    },
    cssmin: {
      target: {
        files: [
        {
          expand: true,
          cwd: 'css',
          src: '*.css',
          dest: '../prod/css',
          ext: '.css'
        },
        {
          expand: true,
          cwd: 'views/css',
          src: '*.css',
          dest: '../prod/views/css',
          ext: '.css'
        }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['copy','htmlmin','uglify', 'cssmin']);

};