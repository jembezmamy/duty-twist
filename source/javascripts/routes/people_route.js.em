class DutyTwist.PeopleRoute extends Em.Route
  
  model: (params) ->
    DutyTwist.Person.find().findBy "id", params.person_id