import AssignmentRoute from "../assignment/route";
import Day from "duty-twist/models/day";

export default AssignmentRoute.extend({
  templateName: "schedules/show/person/assignment",
  controllerName: "schedules/show/person/assignment",

  model() {
    var today = Day.create({
      schedule: this.modelFor("schedules.show"),
      date: new Date()
    });
    var i = today.get("round.number");
    return this.modelFor("schedules.show.person").get("assignments").objectAt(i);
  }
})
