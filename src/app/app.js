window.MovieHub = Ember.Application.create({
    LOG_TRANSITIONS: true,
    templateBasePath:"app/templates/",
    templates:['application',
        'header',
        'footer',
        'home',
        'movie',
        'movie/index',
        'movie/list',
        'movie/details',
        'tv'
    ]
});