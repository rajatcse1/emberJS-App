MovieHub.Router.map(function() {
    this.resource('home', {
        path: '/'
    }, function() {

    });
    this.resource('movie', {
        path: '/movie'
    }, function() {
        this.route('list', {
            path: '/list/:genre_id'
        });
        this.resource('details', {
            path: '/details/:movie_id'
        }, function() {
            this.route('credits', {
                path: '/credits'
            });
        });
    });
    this.resource('tv', {
        path: '/tv'
    }, function() {

    });
});

/*
home                            "/"                     home                HomeRoute
movie                           "/movie"                movie               MovieRoute
├── list                        "/list/:genre_id"       movie.list          
*/