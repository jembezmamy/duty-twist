import Ember from "ember";
import Day from "duty-twist/models/day";

export default Ember.Controller.extend({

  clock: Ember.inject.service(),

  actions: {
    goBack() {
      this.transitionToRoute("schedules.index");
    },

    edit() {
      this.transitionToRoute("schedules.edit", this.get("model"));
    },

    share() {
      this.transitionToRoute("schedules.show.index.share", this.get("model"));
    }
  },

  rounds: Ember.computed("model.rounds", "today.round.number", {
    get() {
      let i0 = this.get("today.round.number") - 1;
      return Ember.Object.extend(Ember.Array).create({
        content: this.get("model.rounds"),
        length: 10,
        objectAt(i) {
          return this.get("content").objectAt(i + i0);
        }
      });
    }
  }),

  today: Ember.computed("clock.day", "model", {
    get() {
      return Day.create({
        date: new Date(),
        schedule: this.get("model")
      });
    }
  })
});
