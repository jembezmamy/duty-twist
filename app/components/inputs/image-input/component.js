import Ember from "ember";
import InputDefaults from "ember-simple-form/mixins/input-defaults";

export default Ember.Component.extend(InputDefaults, {
  tagName: "button",
  attributeBindings: ["type"],
  type: "button",

  value: Ember.computed.alias("modelValue"),

  actions: {
    next() {
      var i = this.get('collection').indexOf(this.get("value"));
      i = (i + 1) % this.get("collection.length");
      this.set("value", this.get("collection").objectAt(i));
    }
  },

  click() {
    this.send("next");
  },

  src: Ember.computed("value", {
    get() {
      return "/assets/images/icons/" + this.get("value") + ".png";
    }
  })
});
