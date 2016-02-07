import AssignmentRoute from "../assignment/route";

export default AssignmentRoute.extend({
  templateName: "schedules/show/person/assignment",
  controllerName: "schedules/show/person/assignment",

  model() {
    return this.modelFor("schedules.show.person").get("assignments").objectAt(0);
  }
})
