import Ember from "ember";

export default Ember.Mixin.create({
  classNames: "ripple-effect-parent",

  ripples: Ember.computed({
    get() {
      return Ember.A();
    }
  }),

  mouseDown(e) {
    this._super(e);
    let offset = this.$().offset();
    let x = e.pageX - offset.left;
    let y = e.pageY - offset.top;
    this.get("ripples").pushObject({
      x: x, y: y
    });
  }
});
