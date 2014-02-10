MovieHub.MovieDetailsRoute = Ember.Route.extend({
    model: function(param) {
        return MovieHub.MovieService.getMovieById(param.movie_id);
    },
    actions:{
        loading:function(){
            console.log("movieDetails loading");
            //loading here
            return true;
        }
    }
});
