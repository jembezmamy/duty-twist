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
    this.laterRuns.forEach((run) => {
      Ember.run.cancel(run);
    });
    this._super(...arguments);
  },

  touchStart(e) {
    this._super(e);
    this.addRipple(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY);
    this.didTouch = true;
  },

  mouseDown(e) {
    this._super(e);
    if (!this.didTouch) {
      this.addRipple(e.pageX, e.pageY);
    }
    this.didTouch = false;
  },

  addRipple(pageX, pageY) {
    let offset = this.$().offset();
    let x = pageX - offset.left;
    let y = pageY - offset.top;
    this.get("ripples").pushObject({
      x: x, y: y, t: new Date().getTime()
    });
    this.laterRuns.push(Ember.run.later(this, this.removeRipple, 500));
  },

  removeRipple() {
    this.get('ripples').shiftObject();
  }
});
