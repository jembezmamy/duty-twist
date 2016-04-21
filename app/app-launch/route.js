import Ember from "ember";

export default Ember.Route.extend({
  localStorage: Ember.inject.service(),

  beforeModel() {
    let scheduleId = this.get("localStorage.lastScheduleId");
    if (Ember.isPresent(scheduleId)) {
      let personId = this.get("localStorage.lastPersonId");
      if (Ember.isPresent(personId)) {
        this.transitionTo("schedules.show.person", scheduleId, personId);
      } else {
        this.transitionTo("schedules.show", scheduleId);
      }
    } else {
      this.transitionTo("schedules.index");
    }
  }
});
