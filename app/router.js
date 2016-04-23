import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("schedules", {path: "/"}, function() {
    this.route("new");
    this.route("join");
    this.route("edit", {path: "/:schedule_token/edit"});
    this.route("show", {path: "/:schedule_token"}, function() {
      this.route("person", {path: "/:person_token"}, function() {
        this.route("assignment", {path: "/:round_number"});
      });
      this.route("index", {path: "/"}, function() {
        this.route("share");
      });
    });
  });
  this.route("app-launch");
});

export default Router;
