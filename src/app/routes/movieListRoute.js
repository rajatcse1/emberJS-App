MovieHub.MovieListRoute = Ember.Route.extend({
    model: function(params) {
        return MovieHub.GenreService.getMoviesByGenre(params.genre_id);
    },
    actions:{
        loading:function(){
            console.log("movielist loading");
            //loading here
            return true;
        },
        displayMovieInfo: function(movieObj){
            this.transitionTo("movie.details", movieObj.id);
        }
    }
});
