import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    previous() {
      this.get("on").send("previous")
    },
    next() {
      this.get("on").send("next")
    }
  },

  previousDisabled: Ember.computed("on.currentColumnIndex", {
    get() {
      return this.get("on.currentColumnIndex") === 0;
    }
  }),

  nextDisabled: Ember.computed("on.currentColumnIndex", "on.columnCount", "on.visibleColumnCount", {
    get() {
      return this.get("on.currentColumnIndex") + this.get("on.visibleColumnCount") === this.get("on.columnCount");
    }
  }),

  hideButtons: Ember.computed.and("previousDisabled", "nextDisabled")
});
