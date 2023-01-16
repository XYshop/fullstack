<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <input type="text" placeholder="New Event" v-model="inputEntry" />
      <p class="calendar-entry-day">
        Day of event: <span class="bold">{{ titleOfActive }}</span>
      </p>
      <a
        class="button is-primary is-small is-outlined"
        @click="submitEvent(inputEntry)"
        >Submit</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const titleOfActive = computed(() => {
  return store.getters.getActiveDay.abbvTitle
})

const inputEntry = ref('')
const submitEvent = (details: string) => {
  store.commit('submitEvent', { details: details, edit: false })
  inputEntry.value = ''
}
</script>

<style scoped lang="scss">
#calendar-entry {
  background: #fff;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #ccc;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
