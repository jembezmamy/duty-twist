import EditRoute from "../edit/route";

export default EditRoute.extend({
  templateName: "schedules/edit",
  controllerName: "schedules/edit",
  
  model() {
    return this.get("store").createRecord("schedule");
  }
});
