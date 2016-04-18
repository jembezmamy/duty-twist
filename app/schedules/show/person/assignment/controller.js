import Ember from "ember";
import Day from "duty-twist/models/day";

export default Ember.Controller.extend({
  clock: Ember.inject.service(),
  i18n: Ember.inject.service(),

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

  title: Ember.computed("model.person.name", "model.round.startsOn", "clock.dayDate", "roundDateHelper", "relativeRoundNumber", {
    get() {
      let date = this.get("roundDateHelper").compute([
        this.get("model.round.startsOn"),
        this.get("clock.dayDate")
      ], {
        relativeRoundNumber: this.get("relativeRoundNumber")
      });
      return this.get("model.person.name") + " " + date;
    }
  }),

  roundDateHelper: Ember.computed("i18n.locale", {
    get() {
      return this.container.lookup("helper:round-date");
    }
  }),

  relativeRoundNumber: Ember.computed("model.round.number", "today.round.number", {
    get() {
      return this.get("model.round.number") - this.get("today.round.number");
    }
  }),

  today: Ember.computed("clock.day", "model", {
    get() {
      return Day.create({
        date: new Date(),
        schedule: this.get("model.schedule")
      });
    }
  })
});
