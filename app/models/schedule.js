import DS from 'ember-data';
import Round from "./round";

export default DS.Model.extend({
  token:        DS.attr("string"),
  name:         DS.attr("string"),
  startsOn:     DS.attr('date'),
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
