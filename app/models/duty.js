import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  image:    DS.attr('string', {
    defaultValue: "a",
    values: ["a", "b", "c"]
  }),

  schedule: DS.belongsTo('schedule', {async: false}),

  _destroy: false
});
