class DutyTwist.Duty
  name: ''
  
  
DutyTwist.Duty.reopenClass

  find: (id) ->
    if id
      @findAll()[id-1]
    else
      @findAll()
      
  findAll: ->
    @_data ||= DutyTwist.DATA.duties.map (name) ->
      DutyTwist.Duty.create name: name
      
  count: ->
    @findAll().length