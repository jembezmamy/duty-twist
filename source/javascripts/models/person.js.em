class DutyTwist.Person
  name: ''
  offset: 0
  
  id: ~> @name.parameterize()
  
  dutyAt: (round) ->
    DutyTwist.Schedule.find().dutyAt(round, @offset)
    
  _assignments: ~> []
  findAssignment: (roundNumber) ->
    @_assignments[roundNumber] ||= DutyTwist.Schedule.find().findRound(roundNumber).assignments[@offset]
    
    
DutyTwist.Person.reopenClass

  find: ->
    @_data ||= DutyTwist.DATA.people.map (name, i) ->
      DutyTwist.Person.create name: name, offset: i