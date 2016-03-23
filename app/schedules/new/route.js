import EditRoute from "../edit/route";

export default EditRoute.extend({
  templateName: "schedules/edit",
  controllerName: "schedules/edit",

  model() {
    let self = this;
    return this.generateId().then(function(id) {
      return self.get("store").createRecord("schedule", {id: id});
    });
  },

  generateId() {
    let id = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for ( var i=0; i < 4 + Math.floor(Math.random() * 5); i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    let self = this;
    return this.get("store").query("schedule", {
      orderBy: "id",
      equalTo: id
    }).then(function(results) {
      if (results.get("length") > 0) {
        return self.generateId();
      } else {
        return id;
      }
    });
  }
});
