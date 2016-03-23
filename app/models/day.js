import Ember from "ember";

export default Ember.Object.extend({
  schedule: null,
  date: null,

  round: Ember.computed("date", "schedule.startsOn", "schedule.interval", "schedule.intervalUnit", {
    get() {
      var start = this.get("schedule.startsOn");
      var date = moment(this.get("date"));
      var distance = date.diff(start, this.get('schedule.intervalUnit'));
      var roundNumber = Math.floor(distance / this.get("schedule.interval"));
      return this.get("schedule.rounds").objectAt(roundNumber);
    }
  })
});
