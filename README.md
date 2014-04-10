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

---------
|method | API | description|
|-------|-----|------------|
| GET | /3/configuration| Updated on Dec. 13, 2013|
|GET| /3/account| Get the basic information for an account. You will need to have a valid session id.|
|GET| /3/account/{id}/lists| Get the lists that you have created and marked as a favorite.|
|GET| /3/account/{id}/favorite_movies| Get the list of favorite movies for an account.|
|POST| /3/account/{id}/favorite| Add or remove a movie to an accounts favorite list.|
|GET| /3/account/{id}/rated_movies| Get the list of rated movies (and associated rating) for an account.|
|GET| /3/account/{id}/movie_watchlist| Get the list of movies on an accounts watchlist.|
|POST| /3/account/{id}/movie_watchlist| Add or remove a movie to an accounts watch list.|
|GET| /3/authentication/token/new| This method is used to generate a valid request token for user based authentication. A request token is required in order to request a session id. You can read more about this process here.|
|GET| /3/authentication/token/validate_with_login| Once you have a valid request token you can use this method to authenticate a user with a TMDb username and password. You can authenticate a request token 2 different ways, both are outlined here.|
|GET| /3/authentication/session/new| This method is used to generate a session id for user based authentication. A session id is required in order to use any of the write methods.|
|GET| /3/authentication/guest_session/new| This method is used to generate a guest session id.|
|GET| /3/certification/movie/list| Get the list of supported certifications for movies. These can be used in conjunction with the certification_country and certification.lte parameters when using discover.|
|GET| /3/movie/changes| Get a list of movie ids that have been edited. By default we show the last 24 hours and only 100 items per page. The maximum number of days that can be returned in a single request is 14. You can then use the movie changes API to get the actual data that has been changed.|
|GET| /3/person/changes| Get a list of people ids that have been edited. By default we show the last 24 hours and only 100 items per page. The maximum number of days that can be returned in a single request is 14. You can then use the person changes API to get the actual data that has been changed.|
|GET| /3/collection/{id}| Get the basic collection information for a specific collection id. You can get the ID needed for this method by making a /movie/{id} request and paying attention to the belongs_to_collection hash.|
|GET| /3/collection/{id}/images| Get all of the images for a particular collection by collection id.|
|GET| /3/company/{id}| This method is used to retrieve all of the basic information about a company.|
|GET| /3/company/{id}/movies| Get the list of movies associated with a particular company.|
|GET| /3/credit/{credit_id}| Get the detailed information about a particular credit record. This is currently only supported with the new credit model found in TV. These ids can be found from any TV credit response as well as the tv_credits and combined_credits methods for people.|
|GET| /3/discover/movie| Discover movies by different types of data like average rating, number of votes, genres and certifications. You can get a valid list of certifications from the /certifications method.|
|GET| /3/discover/tv| Discover TV shows by different types of data like average rating, number of votes, genres, the network they aired on and air dates.|
|GET| /3/find/{id}| The find method makes it easy to search for objects in our database by an external id. For instance, an IMDB ID. This will search all objects (movies, TV shows and people) and return the results in a single response. TV season and TV episode searches will be supported shortly.|
|GET| /3/genre/list| Get the list of genres.|
|GET| /3/genre/{id}/movies| Get the list of movies for a particular genre by id. By default, only movies with 10 or more votes are included.|
|GET| /3/guest_session/{guest_session_id}/rated_movies| Get a list of rated movies for a specific guest session id.|
|GET| /3/job/list| Get a list of valid jobs.|
|GET| /3/keyword/{id}| Get the basic information for a specific keyword id.|
|GET| /3/keyword/{id}/movies| Get the list of movies for a particular keyword by id.|
|GET| /3/list/{id}| Get a list by id.|
|GET| /3/list/{id}/item_status| Check to see if a movie ID is already added to a list.|
|POST| /3/list| This method lets users create a new list. A valid session id is required.|
|POST| /3/list/{id}/add_item| This method lets users add new movies to a list that they created. A valid session id is required.|
|POST| /3/list/{id}/remove_item| This method lets users delete movies from a list that they created. A valid session id is required.|
|POST| /3/list/{id}/clear| Clear all of the items within a list. This is a irreversible action and should be treated with caution. A valid session id is required. A call without confirm=true will return status code 29.|
|DELETE| /3/list/{id}| This method lets users delete a list that they created. A valid session id is required.|
|GET| /3/movie/{id}| Get the basic movie information for a specific movie id.|
|GET| /3/movie/{id}/alternative_titles| Get the alternative titles for a specific movie id.|
|GET| /3/movie/{id}/credits| Get the cast and crew information for a specific movie id.|
|GET| /3/movie/{id}/images| Get the images (posters and backdrops) for a specific movie id.|
|GET| /3/movie/{id}/keywords| Get the plot keywords for a specific movie id.|
|GET| /3/movie/{id}/releases| Get the release date and certification information by country for a specific movie id.|
|GET| /3/movie/{id}/videos| Get the videos (trailers, teasers, clips, etc...) for a specific movie id.|
|GET| /3/movie/{id}/translations| Get the translations for a specific movie id.|
|GET| /3/movie/{id}/similar_movies| Get the similar movies for a specific movie id.|
|GET| /3/movie/{id}/reviews| Get the reviews for a particular movie id.|
|GET| /3/movie/{id}/lists| Get the lists that the movie belongs to.|
|GET| /3/movie/{id}/changes| Get the changes for a specific movie id.|
|GET| /3/movie/latest| Get the latest movie id.|
|GET| /3/movie/upcoming| Get the list of upcoming movies. This list refreshes every day. The maximum number of items this list will include is 100.|
|GET| /3/movie/now_playing| Get the list of movies playing in theatres. This list refreshes every day. The maximum number of items this list will include is 100.|
|GET| /3/movie/popular| Get the list of popular movies on The Movie Database. This list refreshes every day.|
|GET| /3/movie/top_rated| Get the list of top rated movies. By default, this list will only include movies that have 10 or more votes. This list refreshes every day.|
|GET| /3/movie/{id}/account_states| This method lets users get the status of whether or not the movie has been rated or added to their favourite or watch lists. A valid session id is required.|
|POST| /3/movie/{id}/rating| This method lets users rate a movie. A valid session id or guest session id is required.|
|GET| /3/person/{id}| Get the general person information for a specific id.|
|GET| /3/person/{id}/movie_credits| Get the movie credits for a specific person id.|
|GET| /3/person/{id}/tv_credits| Get the TV credits for a specific person id.|
|GET| /3/person/{id}/combined_credits| Get the combined (movie and TV) credits for a specific person id.|
|GET| /3/person/{id}/external_ids| Get the external ids for a specific person id.|
|GET| /3/person/{id}/images| Get the images for a specific person id.|
|GET| /3/person/{id}/changes| Get the changes for a specific person id.|
|GET| /3/person/popular| Get the list of popular people on The Movie Database. This list refreshes every day.|
|GET| /3/person/latest| Get the latest person id.|
|GET| /3/review/{id}| Get the full details of a review by ID.|
|GET| /3/search/movie| Search for movies by title.|
|GET| /3/search/collection| Search for collections by name.|
|GET| /3/search/tv| Search for TV shows by title.|
|GET| /3/search/person| Search for people by name.|
|GET| /3/search/list| Search for lists by name and description.|
|GET| /3/search/company| Search for companies by name.|
|GET| /3/search/keyword| Search for keywords by name.|
|GET| /3/timezones/list| Get the list of supported timezones for the API methods that support them.|
|GET| /3/network/{id}| This method is used to retrieve the basic information about a TV network. You can use this ID to search for TV shows with the discover. At this time we don't have much but this will be fleshed out over time.|
|GET| /3/tv/{id}| Get the primary information about a TV series by id.|
|GET| /3/tv/{id}/credits| Get the cast & crew information about a TV series. Just like the website, we pull this information from the last season of the series.|
|GET| /3/tv/{id}/external_ids| Get the external ids that we have stored for a TV series.|
|GET| /3/tv/{id}/images| Get the images (posters and backdrops) for a TV series.|
|GET| /3/tv/{id}/translations| Get the list of translations that exist for a TV series. These translations cascade down to the episode level.|
|GET| /3/tv/{id}/videos| Get the videos that have been added to a TV series (trailers, opening credits, etc...)|
|GET| /3/tv/on_the_air| Get the list of TV shows that are currently on the air. This query looks for any TV show that has an episode with an air date in the next 7 days.|
|GET| /3/tv/airing_today| Get the list of TV shows that air today. Without a specified timezone, this query defaults to EST (Eastern Time UTC-05:00).|
|GET| /3/tv/top_rated| Get the list of top rated TV shows. By default, this list will only include TV shows that have 2 or more votes. This list refreshes every day.|
|GET| /3/tv/popular| Get the list of popular TV shows. This list refreshes every day.|
|GET| /3/tv/{id}/season/{season_number}| Get the primary information about a TV season by its season number.|
|GET| /3/tv/{id}/season/{season_number}/credits| Get the cast & crew credits for a TV season by season number.|
|GET| /3/tv/{id}/season/{season_number}/external_ids| Get the external ids that we have stored for a TV season by season number.|
|GET| /3/tv/{id}/season/{season_number}/images| Get the images (posters) that we have stored for a TV season by season number.|
|GET| /3/tv/{id}/season/{season_number}/videos| Get the videos that have been added to a TV season (trailers, teasers, etc...)|
|GET| /3/tv/{id}/season/{season_number}/episode/{episode_number}| Get the primary information about a TV episode by combination of a season and episode number.|
|GET| /3/tv/{id}/season/{season_number}/episode/{episode_number}/credits| Get the TV episode credits by combination of season and episode number.|
|GET| /3/tv/{id}/season/{season_number}/episode/{episode_number}/external_ids| Get the external ids for a TV episode by comabination of a season and episode number.|
|GET| /3/tv/{id}/season/{season_number}/episode/{episode_number}/images| Get the images (episode stills) for a TV episode by combination of a season and episode number. Since episode stills don't have a language, this call will always return all images.|
|GET| /3/tv/{id}/season/{season_number}/episode/{episode_number}/videos| Get the videos that have been added to a TV episode (teasers, clips, etc...)|
