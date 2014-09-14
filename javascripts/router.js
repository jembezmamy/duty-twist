(function() {
  DutyTwist.Router.map(function() {
    return this.route("person", {
      path: ":person_id/"
    }, function() {
      return this.route("assignment", {
        path: ":round_number"
      });
    });
  });

}).call(this);
