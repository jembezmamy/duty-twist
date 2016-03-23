import Ember from "ember";
import RippleEffect from "../ripple-effect/mixin";

export default Ember.LinkComponent.extend(RippleEffect, {
  classNames: "button"
});
