import DS from 'ember-data';
import moment from "moment";
import RoundArray from "./round-array";

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
      return RoundArray.create({
        schedule: this
      });
    }
  })
});
