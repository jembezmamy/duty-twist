import Ember from "ember";
import RippleEffect from "../ripple-effect/mixin";

export default Ember.Component.extend(RippleEffect, {
  tagName: "button",
  classNames: "basic-button button",
  attributeBindings: ["type", "title"],
  type: "button",
  title: null,

  click() {
    this.sendAction();
  }
});
