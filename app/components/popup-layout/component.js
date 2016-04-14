import Ember from "ember";

export default Ember.Component.extend({
  classNames: "popup-layout",

  actions: {
    goBack() {
      this.sendAction("goBack");
    }
  }
});
