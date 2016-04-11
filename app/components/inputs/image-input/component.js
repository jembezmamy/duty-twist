import Ember from "ember";
import InputDefaults from "ember-simple-form/mixins/input-defaults";

export default Ember.Component.extend(InputDefaults, {
  classNames: "image-input",
  classNameBindings: ["dropdownVisible"],
  attributeBindings: ["tabindex"],
  tabindex: 0,

  value: Ember.computed.alias("modelValue"),

  dropdownVisible: false,
  didFocusByClick: false,

  actions: {
    showDropdown() {
      this.set("dropdownVisible", true);
    },

    hideDropdown() {
      this.set("dropdownVisible", false);
    },

    toggleDropdown() {
      this.set("dropdownVisible", !this.get("dropdownVisible"));
    },

    select(value) {
      this.set("value", value);
      this.send("hideDropdown");
    }
  },

  mouseDown() {
    if (!this.$().is(":focus")) {
      this.set("didFocusByClick", true);
    }
  },

  focusIn() {
    if (!this.get("didFocusByClick")) {
      this.send("showDropdown");
    }
    this.set("didFocusByClick", false);
  },

  focusOut() {
    this.send("hideDropdown");
  }
});
