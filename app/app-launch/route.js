import Ember from "ember";

export default Ember.Route.extend({
  localStorage: Ember.inject.service(),

  beforeModel() {
    let scheduleId = this.get("localStorage.lastScheduleId");
    if (Ember.isPresent(scheduleId)) {
      this.get("store").find("schedule", scheduleId).then((schedule) => {
        let personId = this.get("localStorage.lastPersonId");
        console.log(personId);
        if (Ember.isPresent(personId)) {
          this.transitionTo("schedules.show.person", schedule, personId);
        } else {
          this.transitionTo("schedules.show", schedule);
        }
      }, () => {
        this.transitionTo("schedules.index");
      });
    } else {
      this.transitionTo("schedules.index");
    }
  }
});
