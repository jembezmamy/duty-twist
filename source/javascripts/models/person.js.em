class DutyTwist.Person
  name: ''
  offset: 0
  
  dutyAt: (round) ->
    DutyTwist.Schedule.find().dutyAt(round, @offset)
    
    
DutyTwist.Person.reopenClass

  find: ->
    @_data ||= DutyTwist.DATA.people.map (name, i) ->
      DutyTwist.Person.create name: name, offset: i