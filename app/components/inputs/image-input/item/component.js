import Ember from "ember";
import {iconPath} from "duty-twist/models/duty";

export default Ember.Component.extend({
  classNames: "image-input-item",

  value: null,

  src: Ember.computed("value", {
    get() {
      return iconPath(this.get("value"));
    }
  }),

  click() {
    this.sendAction("action", this.get("value"));
  }
})
