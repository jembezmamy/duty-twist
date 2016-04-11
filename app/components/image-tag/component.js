import Ember from "ember";

export default Ember.Component.extend({
  tagName: "img",
  attributeBindings: ["normalizedSrc:src", "alt"],

  src: null,
  alt: null,

  normalizedSrc: Ember.computed("src", {
    get() {
      var src = "/assets/images/" + this.get("src");
      if (Modernizr.svgasimg) {
        return src;
      } else {
        return src.replace(/svg$/, "png");
      }
    }
  })
});
