import Ember from "ember";

export default Ember.Component.extend({
  tagName: "header",
  classNames: "app-layout-header",
  classNameBindings: ["isSticked"],
  attributeBindings: ["style"],

  maxHeight: 128,
  minHeight: 48,
  transitionDistance: 16,

  height: 0,
  isSticked: false,

  didInsertElement() {
    this._super();
    $(window).on("scroll", $.proxy(this.handleScroll, this));
  },

  willDestroy() {
    $(window).off("scroll", this.handleScroll);
    this._super();
  },

  handleScroll() {
    Ember.run.scheduleOnce("render", this, this.redraw);
  },

  redraw() {
    let progress = Math.min(1, $(window).scrollTop() / this.get("transitionDistance"));
    let min = this.get("minHeight");
    let max = this.get("maxHeight");
    this.setProperties({
      height: max - progress * (max - min),
      isSticked: progress === 1
    })
  },

  style: Ember.computed("height", {
    get() {
      let h = this.get("height");
      if (h) {
        return `height: ${h}px`.htmlSafe();
      }
    }
  })
});
