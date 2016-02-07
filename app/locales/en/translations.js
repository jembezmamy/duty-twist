export default {
  components: {
    scheduleForm: {
      duty: {
        remove: "Remove task"
      },
      person: {
        remove: "Remove person"
      }
    },
    scheduleTable: {
      round: {
        current: "Today",
        previous: "Previously"
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
    index: {
      createNew: "Create new schedule",
      orFind: "…or find by id",
      tokenPlaceholder: "Type schedule id",
      submit: "Find"
    },
    new: {
      title: "New schedule"
    },
    show: {
      edit: "Edit",
      person: {
        back: "Back",
        assignment: {
          previous: "Previous",
          next: "Next"
        }
      }
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
