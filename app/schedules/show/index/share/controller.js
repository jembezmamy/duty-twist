import Ember from "ember";

export default Ember.Controller.extend({

  actions: {
    goBack() {
      this.transitionToRoute("schedules.show", this.get("model"));
    }
  },

  url: Ember.computed("model.id", {
    get() {
      return window.location.protocol + "//" +
        window.location.host + "/" + this.get("model.id");
    }
  })
});
