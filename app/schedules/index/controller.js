import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    show(schedule) {
      this.transitionToRoute("schedules.show", schedule);
    }
  }
});
