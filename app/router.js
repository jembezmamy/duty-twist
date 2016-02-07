import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("schedules", {path: "/"}, function() {
    this.route("new");
    this.route("edit", {path: "/:schedule_id/edit"});
    this.route("show", {path: "/:schedule_id"}, function() {
      this.route("person", {path: "/:person_token"}, function() {
        this.route("assignment", {path: "/:round_number"})
      })
    });
  });
});

export default Router;
