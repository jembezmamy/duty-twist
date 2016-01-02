export default {
  components: {
    scheduleForm: {
      duty: {
        remove: "Remove task"
      },
      person: {
        remove: "Remove person"
      }
    }
  },

  duty: {
    placeholders: {
      name: "Name"
    }
  },

  person: {
    placeholders: {
      name: "Name"
    }
  },

  schedule: {
    attributes: {
      startsOn: "First day",
      interval: "Round duration"
    }
  },
  schedules: {
    edit: {
      title: "Schedule settings",
      people: "People",
      addPerson: "Add person",
      duties: "Tasks",
      addDuty: "Add task"
    },
    new: {
      title: "New schedule"
    }
  },

  units: {
    day: {
      one: "day",
      other: "days"
    },
    month: {
      one: "month",
      other: "months"
    },
    week: {
      one: "week",
      other: "weeks"
    }
  }
};
