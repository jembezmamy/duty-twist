class DutyTwist.Person
  name: ''
  offset: 0
  schedule: null
  
  id: ~> @name.parameterize()
  
  dutyAt: (round) ->
    @schedule.dutyAt(round, @offset)
    
  _assignments: ~> []
  findAssignment: (roundNumber) ->
    @_assignments[roundNumber] ||= @schedule.findRound(roundNumber).assignments[@offset]
