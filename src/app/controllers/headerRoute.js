MovieHub.HeaderRoute = Ember.Route.extend({
    model: function(){
        console.log(MovieHub.configData);
        return ["a", "b"];//MovieHub.configData;
    }
});