MovieHub.Service = Ember.Object.extend({
    configuration:function () {
        return ('/configuration?').format();
    },
    genre_list:function () {
        return ('/genre/list?').format();
    },
    genre_movies:function (genreId, pageNum) {
        return ('/genre/' + genreId + '/movies?page=' + pageNum + '&').format();
    },
    misc_latest:function () {
        return ('/movie/latest').format();
    },
    misc_upcoming:function () {
        return ('/movie/upcoming?page={0}').format();
    },
    misc_now_playing:function () {
        return ('/movie/now-playing?page={0}').format();
    },
    misc_popular:function () {
        return ('/movie/popular?page={0}').format();
    },
    misc_top_rated:function () {
        return ('/movie/top-rated?page={0}').format();
    },
    movie_info:function (movie_id) {
        return ('/movie/' + movie_id + '?').format();
    },
    movie_alternative_titles:function () {
        return ('/movie/{0}/alternative_titles').format();
    },
    movie_casts:function () {
        return ('/movie/{0}/casts').format();
    },
    movie_images:function () {
        return ('/movie/{0}/images').format();
    },
    movie_keywords:function () {
        return ('/movie/{0}/keywords').format();
    },
    movie_releases:function () {
        return ('/movie/{0}/releases').format();
    },
    movie_trailers:function () {
        return ('/movie/{0}/trailers').format();
    },
    movie_translations:function () {
        return ('/movie/{0}/translations').format();
    },
    movie_similar:function () {
        return ('/movie/{0}/similar_movies?page={1}').format();
    },
    person_info:function () {
        return ('/person/{0}').format();
    },
    person_credits:function () {
        return ('/person/{0}/credits').format();
    },
    person_images:function () {
        return ('/person/{0}/images').format();
    },
    collection_info:function () {
        return ('/collection/{0}').format();
    },
    search_movie:function () {
        return ('/search/movie?query={0}&page={1}').format();
    },
    search_person:function () {
        return ('/search/person?query={0}&page={1}').format();
    },
    search_companies:function () {
        return ('/search/company?query={0}&page={1}').format();
    },
    auth_request_token:function () {
        return ('/authentication/token/new').format();
    },
    auth_session_id:function () {
        return ('/authentication/session/new?request_token={0}').format();
    },
    write_rate_movie:function () {
        return ('/movie/{0}/rating?session_id={1}').format();
    },
    company_info:function () {
        return ('/company/{0}').format();
    },
    company_movies:function () {
        return ('/company/{0}/movies').format();
    },
    account_info:function () {
        return ('/account?session_id={0}').format();
    },
    account_add_favorite:function () {
        return ('/account/{0}/favorite?session_id={1}').format();
    },
    account_favorite_movies:function () {
        return ('/account/{0}/favorite_movies?session_id={1}').format();
    },
    account_add_movie_watchlist:function () {
        return ('/account/{0}/movie_watchlist?session_id={1}').format();
    },
    account_movie_watchlist:function () {
        return ('/account/{0}/movie_watchlist?session_id={1}').format();
    },
    account_rated_movies:function () {
        return ('/account/{0}/rated_movies?session_id={1}').format();
    }
});
