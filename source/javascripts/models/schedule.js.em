class DutyTwist.Schedule
  
  startTime: 0
  interval: 7 * 24 * 60 * 60 * 1000
    
  currentRound: ~>
    Math.floor((new Date().getTime() - @startTime) / @interval)
    
  dutyAt: (round, offset = 0) ->
    id = (round + offset) % DutyTwist.Duty.count() + 1
    DutyTwist.Duty.find id
    
  _rounds: ~> []
  findRound: (number) ->
    number = number * 1
    @_rounds[number] ||= DutyTwist.Round.create number: number, schedule: this
    
  people: ~> DutyTwist.Person.find()
  duties: ~> DutyTwist.Duty.find()
    
    
DutyTwist.Schedule.reopenClass

  find: ->
    @_data ||= DutyTwist.Schedule.create
      startTime: new Date(DutyTwist.DATA.startDate).getTime()
      interval: DutyTwist.DATA.interval * 24 * 60 * 60 * 1000
