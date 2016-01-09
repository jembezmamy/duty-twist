import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    findByToken() {
      this.transitionToRoute("schedules.show", this.get("token"));
    }
  }
});
