import Ember from "ember";

export default Ember.Mixin.create({
  classNames: "ripple-effect-parent",

  ripples: Ember.computed({
    get() {
      return Ember.A();
    }
  }),

  init() {
    this._super(...arguments);
    this.laterRuns = Ember.A();
  },

  willDestroy() {
    this.laterRuns.each((run) => {
      Ember.run.cancel(run);
    });
    this._super(...arguments);
  },

  mouseDown(e) {
    this._super(e);
    let offset = this.$().offset();
    let x = e.pageX - offset.left;
    let y = e.pageY - offset.top;
    this.get("ripples").pushObject({
      x: x, y: y, t: new Date().getTime()
    });
    this.laterRuns.push(Ember.run.later(this, this.removeRipple, 500));
  },

  removeRipple() {
    this.get('ripples').shiftObject();
  }
});
