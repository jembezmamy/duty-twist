class DutyTwist.Schedule
  
  startTime: 0
  interval: 7 * 24 * 60 * 60 * 1000
    
  currentRound: ~>
    Math.floor((new Date().getTime() - @startTime) / @interval)
    
  dutyAt: (round, offset = 0) ->
    index = (round + offset) % @duties.length
    @duties[index]
    
  _rounds: ~> []
  findRound: (number) ->
    number = number * 1
    @_rounds[number] ||= DutyTwist.Round.create number: number, schedule: this
    
  people: ~> []
  duties: ~> []
    
    
DutyTwist.Schedule.reopenClass

  get: ->
    @_data ||= DutyTwist.Schedule.import(DutyTwist.DATA)
      
  import: (data) ->
    schedule = DutyTwist.Schedule.create
      startTime: new Date(data.startDate).getTime()
      interval: data.interval * 24 * 60 * 60 * 1000
    schedule.people = data.people.map (name, i) ->
      DutyTwist.Person.create name: name, offset: i, schedule: schedule
    schedule.duties = data.duties.map (name) ->
      DutyTwist.Duty.create name: name, schedule: schedule
    schedule
