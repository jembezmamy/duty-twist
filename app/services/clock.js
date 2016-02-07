import Ember from "ember";

export default Ember.Service.extend({
  minute: null,
  hour: null,
  day: null,

  init() {
    this._super();
    setInterval(this.tick.bind(this), 60 * 1000);
    this.tick();
  },

  tick() {
    let date = new Date();
    let params = {};
    let minutes = date.getMinutes();
    if (this.get("minute") !== minutes) {
      params.minute = minutes;
    }
    let hours = date.getHours();
    if (this.get("hour") !== hours) {
      params.hour = hours;
    }
    let day = date.getDay();
    if (this.get("day") !== day) {
      params.day = day;
    }
    this.setProperties(params);
  },

  dayDate: Ember.computed("day", {
    get() {
      return new Date();
    }
  }),

  hourDate: Ember.computed("hour", {
    get() {
      return new Date();
    }
  }),

  minuteDate: Ember.computed("minute", {
    get() {
      return new Date();
    }
  })

});
