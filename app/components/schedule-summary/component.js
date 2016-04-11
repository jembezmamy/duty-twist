import Ember from "ember";
import RippleEffect from "../ripple-effect/mixin";

export default Ember.Component.extend(RippleEffect, {
  classNames: ["schedule-summary", "card"],

  click(e) {
    this._super(e);
    this.sendAction("show", this.get("model"));
  }
});
