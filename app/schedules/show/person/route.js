import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    return this.modelFor("schedules.show").get("people").findBy("token", params.person_token);
  },

  serialize(model) {
    return {person_token: model.get("token")};
  }
})
