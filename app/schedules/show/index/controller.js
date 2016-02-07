import Ember from "ember";

export default Ember.Controller.extend({

  clock: Ember.inject.service(),

  rounds: Ember.computed({
    get() {
      return Ember.Object.extend(Ember.Array).create({
        content: this.get("model.rounds"),
        length: 10,
        objectAt(i) {
          return this.get("content").objectAt(i);
        }
      });
    }
  })
});
