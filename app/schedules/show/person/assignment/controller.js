import Ember from "ember";
import {roundDate} from "duty-twist/helpers/round-date";

export default Ember.Controller.extend({
  clock: Ember.inject.service(),

  actions: {
    goBack() {
      this.transitionToRoute("schedules.show", this.get("model.schedule"));
    },

    previous() {
      this.transitionToRoute("schedules.show.person.assignment",
        this.get("model.schedule"),
        this.get("model.person"),
        this.get("model.round.number") - 1
      );
    },

    next() {
      this.transitionToRoute("schedules.show.person.assignment",
        this.get("model.schedule"),
        this.get("model.person"),
        this.get("model.round.number") + 1
      );
    }
  },

  title: Ember.computed("model.person.name", "model.round.startsOn", "clock.dayDate", {
    get() {
      let date = roundDate([this.get("model.round.startsOn"), this.get("clock.dayDate")]);
      return this.get("model.person.name") + " " + date;
    }
  })
});
