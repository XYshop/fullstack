<template>
  <div>
    <h2 class="title has-text-centered dividing-header">UpVote!</h2>
    <div class="section">
      <article
        v-for="submission of submissioms"
        :key="submission.id"
        class="media"
        :class="{ 'blue-border': submission.votes >= 20 }"
      >
        <submission-component :submission="submission" @vote="vote">
        </submission-component>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import SubmissionComponent from '@/components/submission/sub-mission.vue'
import seed from '@/utils/static-data/seed'

const submissioms = reactive(seed())

watch(
  submissioms,
  () => {
    submissioms.sort((a, b) => {
      return b.votes - a.votes
    })
  },
  { deep: true, immediate: true }
)

const vote = (id: number) => {
  const submission = submissioms.find((submission) => {
    return submission.id === id
  })
  if (submission) {
    submission.votes++
  }
}
</script>

<style scoped>
/* Miscellaneous Styles */

.dividing-header {
  margin-top: 1em;
  margin-bottom: 1em;
}

.section {
  padding: 1rem 1.5rem;
}

.media {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #e6e7e9;
  padding: 1em 1.5em 0.5em 1.5em;
  border-radius: 0.3em;
}

.media + .media {
  margin-top: 1.5rem;
}

.blue-border {
  border: 1px solid #3373dc !important;
}
</style>
