import Ember from "ember";

export default Ember.Component.extend({
  tagName: "tr",

  clock: Ember.inject.service(),
  i18n: Ember.inject.service(),

  label: Ember.computed("currentRoundNumber", "model.number", "i18n.locale", {
    get() {
      var number = this.get("model.number");
      var currentNumber = this.get("currentRoundNumber");
      if (number === currentNumber) {
        return this.get("i18n").t("components.scheduleTable.round.current");
      } else if (number === currentNumber - 1) {
        return this.get("i18n").t("components.scheduleTable.round.previous");
      }
    }
  })
});
