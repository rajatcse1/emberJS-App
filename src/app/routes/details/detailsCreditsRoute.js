MovieHub.DetailsCreditsRoute = Ember.Route.extend({
    model: function(param) {
        return MovieHub.MovieService.getCastsByMovieId(this.modelFor('details').id);
    },
    actions: {
        loading: function() {
            console.log("movieDetails loading");
            //loading here
            return true;
        }
    }
});