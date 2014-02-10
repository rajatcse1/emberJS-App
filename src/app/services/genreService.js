var service = MovieHub.Service.create();

MovieHub.GenreService = Ember.Object.extend();
MovieHub.GenreService.reopenClass({
    getAllGenre: function() {
        return $.getJSON(service.genre_list()).then(function(response) {
            var genres = [];//genre_list

            response.genres.forEach( function (genre) {
                genres.push( MovieHub.Genre.create(genre) );
            });

            return genres;
        });
    },
    /**
     *
     * @param genreId
     * @return {*}
     * sample data:
     * {
            id: 12,
            page: 1,
            results: [
                {
                adult: false,
                backdrop_path: "/mqsKjPYDvbIYZhghgL4N5HMnEKa.jpg",
                id: 204,
                original_title: "Le salaire de la peur",
                release_date: "1953-04-22",
                poster_path: "/jajWj2EpSeCpO8TZX4hXktNzwly.jpg",
                popularity: 2.93908834794285,
                title: "The Wages of Fear",
                vote_average: 9.2,
                vote_count: 10
                },
     */
    getMoviesByGenre: function(genreId, currentPage){
        return $.getJSON(service.genre_movies(genreId, currentPage || 1)).then(function(response) {
            var movies = [];

            response.results.forEach( function (movie) {
                movies.push( movie );
            });

            return movies;
        });
    }
});