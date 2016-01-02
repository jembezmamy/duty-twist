import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  image:    DS.attr('string'),
  _destroy: DS.attr("boolean"),
  
  schedule: DS.belongsTo('schedule')
});
