import EditRoute from "../edit/route";
import moment from "moment";

export default EditRoute.extend({
  templateName: "schedules/edit",
  controllerName: "schedules/edit",

  i18n: Ember.inject.service(),

  model() {
    return this.get("store").createRecord("schedule", {
      name: this.get("i18n").t("schedules.new.defaultName"),
      startsOn: moment().startOf("week").toDate()
    });
  }

});
