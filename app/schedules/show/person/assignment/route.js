import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    return this.modelFor("schedules.show.person").get("assignments").objectAt(params.round_number);
  },

  serialize(model) {
    return {round_number: model.get("number")};
  }
})
