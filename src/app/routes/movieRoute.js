MovieHub.MovieRoute = Ember.Route.extend({
    model: function() {
        return MovieHub.GenreService.getAllGenre();
    },
    actions:{
        gotoMovieListByGenre: function(genre){
            this.transitionTo("movie.list", genre.id)
        }
    }
});