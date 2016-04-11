import Ember from "ember";

export default Ember.Service.extend({
  unknownProperty(key) {
    return JSON.parse(window.localStorage.getItem(key) || "null");
  },

  setUnknownProperty(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
});
