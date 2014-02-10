var service = MovieHub.Service.create();

MovieHub.MovieService = Ember.Object.extend();
MovieHub.MovieService.reopenClass({
    getMovieById: function(movieId){
        return $.getJSON(service.movie_info(movieId)).then(function(response) {
            return response;
        });
    }
});