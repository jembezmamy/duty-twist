import SimpleInput from "ember-simple-form/components/simple-input";
import ENV from "duty-twist/config/environment";
import Ember from "ember";

export default SimpleInput.extend({
  classNameBindings: ["labelAsPlaceholder", "isBlurred:is-blurred:is-focused"],

  configuration: Ember.computed({
    get() {
      return ENV.simpleForm;
    }
  }),

  labelAsPlaceholder: Ember.computed.and("isBlurred", "isEmpty"),

  isBlurred: true,

  isEmpty: Ember.computed("value", {
    get() {
      return Ember.isBlank(this.get("value"));
    }
  }),

  focusIn(e) {
    this.set("isBlurred", false);
    this._super(e);
  },

  focusOut(e) {
    this.set("isBlurred", true);
    this._super(e);
  }




});
