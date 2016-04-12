import DS from 'ember-data';

export function iconPath(name) {
  return `icons/${name}.png`;
}

export function illustrationPath(name) {
  return `illustrations/${name}.jpg`;
}

export default DS.Model.extend({
  name:     DS.attr('string'),
  image:    DS.attr('string', {
    defaultValue: "kitchen",
    values: ["kitchen", "hall", "bathroom", "trash"]
  }),

  schedule: DS.belongsTo('schedule', {async: false}),

  _destroy: false,

  iconPath: Ember.computed("image", {
    get() {
      return iconPath(this.get("image"));
    }
  }),

  illustrationPath: Ember.computed("image", {
    get() {
      return illustrationPath(this.get("image"));
    }
  })

});
