import Ember from "ember";

export default Ember.Component.extend({
  iconColor: null,

  actions: {
    trigger() {
      this.get("model").send("trigger");
    }
  },

  iconClass: Ember.computed("model.icon", "iconColor", {
    get() {
      let icon = [this.get("model.icon"), this.get("iconColor")].compact().join("-");
      return `icon ${icon}`;
    }
  })
});
