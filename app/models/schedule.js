import DS from 'ember-data';
import moment from "moment";

export default DS.Model.extend({
  startsOn:     DS.attr('date', {
    defaultValue() {
      return moment().startOf("week");
    }
  }),
  interval:     DS.attr('number', { defaultValue: 1 }),
  intervalUnit: DS.attr("string", { defaultValue: "week" }),

  people:       DS.hasMany('person', { async: false }),
  duties:       DS.hasMany('duty', { async: false })
});
