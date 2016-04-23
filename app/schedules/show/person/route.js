import Ember from "ember";

export default Ember.Route.extend({
  localStorage: Ember.inject.service(),

  actions: {
    error() {
      this.transitionTo("schedules.show", this.modelFor("schedules.show"));
    }
  },

  model(params) {
    let model = this.modelFor("schedules.show").get("people").findBy("token", params.person_token);
    if (model) {
      return model;
    } else {
      return Ember.RSVP.reject();
    }
  },

  serialize(model) {
    return {person_token: model.get("token")};
  },

  afterModel(model) {
    this.set("localStorage.lastPersonId", model.get("token"));
  }
});
