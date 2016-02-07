import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  position: DS.attr('number'),

  schedule: DS.belongsTo('schedule', {async: false}),

  _destroy: false,

  assignments: Ember.computed("schedule.rounds", {
    get() {
      let person = this;
      return Ember.Object.create({
        rounds: this.get('schedule.rounds'),
        objectAt(i) {
          return this.get("rounds").objectAt(i).get("assignments").findBy("person", person);
        }
      });
    }
  })
});
