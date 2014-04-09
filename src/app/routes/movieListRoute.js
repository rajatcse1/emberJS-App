MovieHub.MovieListRoute = Ember.Route.extend({
    model: function(params) {
        return MovieHub.GenreService.getMoviesByGenre(params.genre_id);
    },
    actions: {
        loading: function() {
            console.log("movielist loading");
            //loading here
            return true;
        },
        displayMovieInfo: function(movieObj) {
            console.info("movieObj:", movieObj);
            this.transitionTo("details.index", movieObj.id);
        }
    }
});