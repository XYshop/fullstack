<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i
          class="fa fa-pencil-square edit-icon"
          @click="editEvent(day.id, event.details)"
        ></i>
        <i
          class="fa fa-trash-o delete-icon"
          @click="deleteEvent(day.id, event.details)"
        ></i>
      </div>
    </div>
    <div v-if="event.edit">
      <input
        type="text"
        :placeholder="event.details"
        v-model="newEventDetails"
      />
      <div class="has-text-centered icons">
        <i
          class="fa fa-check"
          @click="updateEvent(day.id, event.details, newEventDetails)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'
import { useStore } from 'vuex'
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

defineProps<{ event: Event; day: Day }>()

const store = useStore()

const newEventDetails = ref('')

const editEvent = (id: number, details: string) => {
  console.log(id, details)
  store.commit({
    type: 'editEvent',
    id,
    details
  })
}

const updateEvent = (id: number, details: string, newDetails: string) => {
  store.commit({ type: 'updateEvent', id, details, newDetails })
}

const deleteEvent = (id: number, details: string) => {
  store.commit({ type: 'deleteEvent', id, details })
}

const getEventBackgroundColor = computed(() => {
  const colors = ['#FF9999', '#85D6FF', '#99FF99']
  const color = Math.floor(Math.random() * colors.length)
  return `background-color: ${colors[color]}`
})
</script>

<style scoped lang="scss">
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4c4c4c;
  padding: 5px;
  background-color: aquamarine;

  .details {
    display: block;
  }

  .icons .fa {
    padding: 0 2px;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>
