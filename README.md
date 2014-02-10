emberJS-App
===========

Sample App based on emberJS

*setup:
Step 1 - Make sure you have setup your package.json or setup new one:

npm init
Step 2 - Install Grunt CLI as global

npm install -g grunt-cli
Step 3 - Install Grunt in your local project

npm install grunt --save-dev
Step 4 - Install any Grunt Module you may need in your build process. Just for sake of this sample I will add Concat module for combining files together:

npm install grunt-contrib-concat --save-dev

npm install -g grunt-init
git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile
grunt-init gruntfile

Step 5 - Now you need to setup your Gruntfile.js which will describe your build process. For this sample I just combine two JS files "file1.js" and "file2.js" in "js" folder and generate "app.js":

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": ["js/file1.js", "js/file2.js"],
                "dest": "js/app.js"
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Task definitions
    grunt.registerTask('default', ['concat']);
};
Step 6 - Now you'll be ready to run your build process by following command:

grunt



Application API:
================
http://docs.themoviedb.apiary.io/#tv

http://image.tmdb.org/t/p/w130/sIJyCJedGlZf1TId41gCtkblBGo.jpg

http://api.themoviedb.org/3/tv/popular?api_key=


sample code:
============
App.store = DS.Store.create({
    revision: 12,
    adapter:DS.MyAdapter.extend({
        serverDomain: "http://api.themoviedb.org",
        namespace:"/3"
    })
});

{{#link-to 'movie.list' genre}}{{genre.name}}{{/link-to}}

{{#each model}}
    {{title}}
{{/each}}