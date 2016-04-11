import Ember from "ember";

export default Ember.Component.extend({
  classNames: "image-input-item",

  value: null,

  src: Ember.computed("value", {
    get() {
      return `icons/${this.get("value")}.png`;
    }
  }),

  click() {
    this.sendAction("action", this.get("value"));
  }
})
