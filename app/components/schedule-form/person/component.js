import Ember from "ember";
import EmberValidations from "ember-validations";
import removeDiacritics from "remove-diacritics";

export default Ember.Component.extend(EmberValidations, {
  tagName: "li",

  model: null,
  parentForm: null,

  actions: {
    remove() {
      this.set("model._destroy", true);
    }
  },

  name: Ember.computed.alias("model.name"),

  validations: {
    name: {
      presence: true
    }
  },

  updateToken: Ember.observer("name", function() {
    var base = removeDiacritics(this.get("name")).toLowerCase().replace(/[^a-z]+/, "-");
    var token = base;
    var i = 1;
    var otherPeople = this.get("model.schedule.people").without(this.get("model"));
    while (otherPeople.findBy("token", token)) {
      i += 1;
      token = base + "-" + i;
    }
    this.set("model.token", token);
  })
});
