DutyTwist.Router.map ->
  @route "people", path: ":person_id/", ->
    @route "assignments", path: ":round_number"