import Ember from "ember";
import {assetUrl} from "duty-twist/helpers/asset-url";

export default Ember.Component.extend({
  tagName: "img",
  attributeBindings: ["normalizedSrc:src", "alt"],

  src: null,
  alt: null,

  normalizedSrc: Ember.computed("src", {
    get() {
      var src = assetUrl("/assets/images/" + this.get("src"));
      if (Modernizr.svgasimg) {
        return src;
      } else {
        return src.replace(/svg$/, "png");
      }
    }
  })
});
