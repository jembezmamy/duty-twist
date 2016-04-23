import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    return this.get("store").query("schedule", {
      where: `token = '${params.schedule_token}'`
    }).then(function(results) {
      return results.get("firstObject");
    });
  },

  serialize(model) {
    return {schedule_token: model.get("token")};
  }
});
