class DutyTwist.PersonRoute extends Em.Route
  
  model: (params) ->
    DutyTwist.Schedule.get().people.findBy "id", params.person_id