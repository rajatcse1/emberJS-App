Ember.Application.reopen({
    init:function () {
        this._super();

        this.loadTemplates();
        this.thumbnailImageUrl();
    },
    templateBasePath:"",
    templates:[],

    loadTemplates:function () {
        var app = this,
            templates = this.get('templates');

        app.deferReadiness();

        var promises = templates.map(function (name) {
            return Ember.$.get(app.get('templateBasePath') + name + '.hbs').then(function (data) {
                Ember.TEMPLATES[name] = Ember.Handlebars.compile(data);
            });
        });

        Ember.RSVP.all(promises).then(function () {
            app.advanceReadiness();
        });
    },
    thumbnailImageUrl:function () {
        Handlebars.registerHelper('thumbImage', function (url, altText) {
            l_url = Handlebars.Utils.escapeExpression(url);
            l_altText = Handlebars.Utils.escapeExpression(altText);

            var result = '<img src="http://image.tmdb.org/t/p/w130' + l_url + '" alt="' + l_altText + '" class="img-thumbnail">';

            return new Handlebars.SafeString(result);
        });
    }
});

String.prototype.format = function () {
    return "http://api.themoviedb.org/3" + this + 'api_key=';
};
