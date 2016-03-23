import Ember from "ember";
import Assignment from "./assignment";

export default Ember.Object.extend({
  schedule: null,
  number: 0,

  startsOn: Ember.computed("number", "schedule.startsOn", "schedule.interval", "schedule.intervalUnit", {
    get() {
      let date = moment(this.get('schedule.startsOn'));
      let amount = this.get('number') * this.get("schedule.interval");
      date.add(amount, this.get("schedule.intervalUnit"));
      return date;
    }
  }),

  assignments: Ember.computed("schedule.people.[]", "schedule.duties.[]", "number", {
    get() {
      let people = this.get("schedule.people");
      let duties = this.get("schedule.duties");
      let number = this.get("number");
      let length = duties.get("length");
      return people.map((person, i) => {
        return Assignment.create({
          person: person,
          duty: duties.objectAt((number + i) % length),
          round: this
        });
      });
    }
  })
});
