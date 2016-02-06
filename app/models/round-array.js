import Ember from "ember";
import Round from "./round";

export default Ember.Object.extend({

  schedule: null,

  objectAt(i) {
    return Round.create({
      schedule: this.get("schedule"),
      number: i
    });
  }
})
