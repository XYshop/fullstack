<template>
  <div>
    <h2 class="title has-text-centered dividing-header">weekly calendar</h2>
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script setup lang="ts">
import CalendarWeek from '@/components/calendar/CalendarWeek.vue'
import CalendarEntry from '@/components/calendar/CalendarEntry.vue'
</script>

<style scoped lang="scss">
.dividing-header {
  margin-top: 1em;
}
</style>
