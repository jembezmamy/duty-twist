import Ember from "ember";
import CollectionInput from "ember-simple-form/components/inputs/collection-input";

export default CollectionInput.extend({
  tagName: "div",

  init() {
    this._super();
    let path = this.get("optionLabelPath").replace(/^content/, "selectedOption");
    Ember.defineProperty(this, "selectedOptionLabel", Ember.computed.reads(path));
  },

  selectedOption: Ember.computed("value", "optionValuePath", "collection.[]", {
    get() {
      let path = this.get("optionValuePath").replace(/^content\.?/, "");
      if (path.length > 0) {
        return this.get("collection").findBy(path, this.get("value"));
      } else {
        return this.get("value");
      }
    }
  })
});
