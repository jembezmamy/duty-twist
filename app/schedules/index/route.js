import Ember from "ember";

export default Ember.Route.extend({
  localStorage: Ember.inject.service(),

  model() {
    return (this.get("localStorage.localSheduleIds") || []).map((id) => {
      return this.get("store").find("schedule", id);
    });
  }
});
