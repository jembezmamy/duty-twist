import Ember from "ember";
import EmberValidations from "ember-validations";

export default Ember.Component.extend(EmberValidations, {
  tagName: "li",

  model: null,
  parentForm: null,

  actions: {
    remove() {
      this.set("model._destroy", true);
    }
  },

  name:   Ember.computed.alias("model.name"),
  image:  Ember.computed.alias("model.image"),

  validations: {
    name: {
      presence: true
    },
    image: {
      presence: true
    }
  },

  images: Ember.computed("model", {
    get() {
      return this.get("model.constructor").metaForProperty("image").options.values;
    }
  })
});
