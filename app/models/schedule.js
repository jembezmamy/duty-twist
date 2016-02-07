import DS from 'ember-data';
import moment from "moment";
import Round from "./round";

export default DS.Model.extend({
  name:         DS.attr("string"),
  startsOn:     DS.attr('date', {
    defaultValue() {
      return moment().startOf("week");
    }
  }),
  interval:     DS.attr('number', { defaultValue: 1 }),
  intervalUnit: DS.attr("string", { defaultValue: "week" }),

  people:       DS.hasMany('person', { async: false }),
  duties:       DS.hasMany('duty',   { async: false }),


  rounds: Ember.computed({
    get() {
      return Ember.Object.create({
        schedule: this,
        objectAt(i) {
          return Round.create({
            schedule: this.get("schedule"),
            number: i * 1
          });
        }
      });
    }
  })
});
