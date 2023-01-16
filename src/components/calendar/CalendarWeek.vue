<template>
  <div class="section">
    <div class="columns is-mobile">
      <CalendarDay v-for="day of week" :key="day.id" :day="day" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import CalendarDay from './CalendarDay.vue'

const store = useStore()

const week = store.state.weekSeed
</script>

<style lang="scss" scoped></style>
