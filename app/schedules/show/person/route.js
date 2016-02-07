import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    return this.modelFor("schedules.show").get("people").findBy("id", params.person_id);
  }
})
