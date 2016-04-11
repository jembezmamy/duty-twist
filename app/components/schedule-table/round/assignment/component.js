import Ember from "ember";

export default Ember.Component.extend({
  imageSrc: Ember.computed("model.duty.image", {
    get() {
      return "icons/" + this.get("model.duty.image") + ".png";
    }
  })
});
