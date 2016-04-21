import Ember from "ember";

export default Ember.Route.extend({
  localStorage: Ember.inject.service(),

  model(params) {
    return this.modelFor("schedules.show").get("people").findBy("token", params.person_token);
  },

  serialize(model) {
    return {person_token: model.get("token")};
  },

  afterModel(model) {
    this.set("localStorage.lastPersonId", model.get("token"));
  }
});
