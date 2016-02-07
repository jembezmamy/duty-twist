import Ember from "ember";

export default Ember.Controller.extend({

  previousRoundNumber: Ember.computed("model.round.number", {
    get() {
      return this.get("model.round.number") - 1;
    }
  }),

  nextRoundNumber: Ember.computed("model.round.number", {
    get() {
      return this.get("model.round.number") + 1;
    }
  }),
})
