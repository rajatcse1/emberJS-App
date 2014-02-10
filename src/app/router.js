MovieHub.Router.map(function() {
    this.resource('home', {path: '/'}, function() {

    });

    this.resource('movie', {path: '/movie'}, function() {
        this.route('list', {path: '/list/:genre_id'});
        this.route('details', {path: '/details/:movie_id'});
    });
    this.resource('tv', {path: '/tv'}, function() {

    });
});