import Ember from "ember";

export default Ember.Component.extend({
  classNames: "ripple-effect-ripple",
  attributeBindings: "style",

  style: Ember.computed("model.x", "model.y", {
    get() {
      let x = this.get("model.x");
      let y = this.get("model.y");
      return `left: ${x}px; top: ${y}px`.htmlSafe();
    }
  })
});
