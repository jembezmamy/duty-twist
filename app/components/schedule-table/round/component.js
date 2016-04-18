import Ember from "ember";

export default Ember.Component.extend({
  tagName: "tr",
  classNameBindings: ["isCurrent", "isPrevious"],

  clock: Ember.inject.service(),
  i18n: Ember.inject.service(),

  isPrevious: Ember.computed("currentRoundNumber", "model.number", {
    get() {
      return this.get("currentRoundNumber") - 1 === this.get("model.number");
    }
  }),

  isCurrent: Ember.computed("currentRoundNumber", "model.number", {
    get() {
      return this.get("currentRoundNumber") === this.get("model.number");
    }
  }),

  relativeRoundNumber: Ember.computed("currentRoundNumber", "model.number", {
    get() {
      return this.get("model.number") - this.get("currentRoundNumber");
    }
  })
});
