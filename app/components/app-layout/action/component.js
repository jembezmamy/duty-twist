import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    trigger() {
      this.sendAction();
    }
  },

  init() {
    this._super(...arguments);
    this.get("on").send("registerAction", this);
  }
});
