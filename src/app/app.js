window.MovieHub = Ember.Application.create({
    LOG_TRANSITIONS: true,
    templateBasePath: "app/templates/",
    configUrl: "config.json",
    configData: null,
    templates: ['application',
        'header',
        'footer',
        'home',
        'movie',
        'movie/index',
        'movie/list',
        'details',
        'details/index',
        'details/credits',
        'tv'
    ]
});
Ember.Application.initializer({
    name: "configLoad",
    initialize: function(container, application) {
        application.deferReadiness();
        Ember.$.getJSON(application.get('configUrl'), function(json) {
            application.configData = json;
            application.advanceReadiness();
        });
    }
});