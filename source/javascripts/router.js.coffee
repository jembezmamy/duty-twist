DutyTwist.Router.map ->
  @route "person", path: ":person_id/", ->
    @route "assignment", path: ":round_number"