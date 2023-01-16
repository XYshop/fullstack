import { createStore } from 'vuex'

interface Event {
  details: string
  edit: boolean
}

interface Day {
  id: number
  abbvTitle: string
  fullTitle: string
  events: Event[]
  active: boolean
}

export interface State {
  weekSeed: Day[]
}

export default createStore<State>({
  state() {
    return {
      weekSeed: [
        {
          id: 1,
          abbvTitle: 'Mon',
          fullTitle: 'Monday',
          events: [
            { details: 'Get Groceries', edit: false },
            { details: 'Carpool', edit: false }
          ],
          active: false
        },
        {
          id: 2,
          abbvTitle: 'Tue',
          fullTitle: 'Tuesday',
          events: [{ details: 'Yoga/Gym', edit: false }],
          active: true
        },
        {
          id: 3,
          abbvTitle: 'Wed',
          fullTitle: 'Wednesday',
          events: [{ details: 'Work social', edit: false }],
          active: false
        },
        {
          id: 4,
          abbvTitle: 'Thu',
          fullTitle: 'Thursday',
          events: [],
          active: false
        },
        {
          id: 5,
          abbvTitle: 'Fri',
          fullTitle: 'Friday',
          events: [{ details: 'Friday dinner/drinks', edit: false }],
          active: false
        },
        {
          id: 6,
          abbvTitle: 'Sat',
          fullTitle: 'Saturday',
          events: [{ details: 'Chill with the parents', edit: false }],
          active: false
        },
        {
          id: 7,
          abbvTitle: 'Sun',
          fullTitle: 'Sunday',
          events: [{ details: 'Netflix/Chill', edit: false }],
          active: false
        }
      ]
    }
  },
  getters: {
    getActiveDay(state) {
      return state.weekSeed.find((day: Day) => {
        return day.active === true
      })
    }
  },
  mutations: {
    changeDay(state, payload: number) {
      state.weekSeed.map((day) =>
        day.id === payload ? (day.active = true) : (day.active = false)
      )
    },
    submitEvent(state, payload: { details: string; edit: boolean }) {
      const activeDay = state.weekSeed.find((day: Day) => {
        return day.active === true
      })
      activeDay?.events.push({ ...payload })
    },
    editEvent(state, payload: { id: number; details: string }) {
      const editDay = state.weekSeed.find((day: Day) => {
        return day.id === payload.id
      })
      const event = editDay?.events.find((event) => {
        return event.details === payload.details
      })
      if (event) {
        event.edit = true
      }
    },
    updateEvent(
      state,
      payload: { id: number; details: string; newDetails: string }
    ) {
      // eslint-disable-next-line array-callback-return
      state.weekSeed.map((day) => {
        // eslint-disable-next-line array-callback-return
        day.events.map((event) => {
          event.edit = false
        })
      })
      const updateDay = state.weekSeed.find((day) => {
        return day.id === payload.id
      })
      const event = updateDay?.events.find((event) => {
        return event.details === payload.details
      })
      if (payload.newDetails) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        event!.details = payload.newDetails
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        event!.details = payload.details
      }
    },
    deleteEvent(state, payload: { id: number; details: string }) {
      const deleteDay = state.weekSeed.find((day: Day) => {
        return day.id === payload.id
      })
      const eventIndex = deleteDay?.events.findIndex((event) => {
        return event.details === payload.details
      })
      if (typeof eventIndex === 'number') {
        deleteDay?.events.splice(eventIndex, 1)
      }
    }
  },
  actions: {},
  modules: {}
})
