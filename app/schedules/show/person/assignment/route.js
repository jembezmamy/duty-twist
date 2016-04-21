import Ember from "ember";
import Day from "duty-twist/models/day";

export default Ember.Route.extend({
  model(params) {
    return this.modelFor("schedules.show.person").get("assignments").objectAt(params.round_number);
  },

  serialize(model) {
    return {round_number: model.get("round.number")};
  },

  afterModel(model) {
    var today = Day.create({
      schedule: this.modelFor("schedules.show"),
      date: new Date()
    });
    if (model.get("round.number") === today.get("round.number")) {
      this.transitionTo("schedules.show.person", model.get("schedule"), model.get("person"));
    }
  },
});
