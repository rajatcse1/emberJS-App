MovieHub.DetailsRoute = Ember.Route.extend({
    movie_id: 0,
    model: function(param) {
        console.info("param:", param);
        movie_id = param.movie_id;
        return MovieHub.MovieService.getMovieById(param.movie_id);
    },
    afterModel: function(movie, transition) {
        if (movie != null) {
            this.transitionTo('details.credits');
        }
    },
    actions: {
        loading: function() {
            console.log("movieDetails loading");
            //loading here
            return true;
        },
        gotoCreditsListByMovie: function(movie) {
            this.transitionTo("details.credits");
        }
    }
});