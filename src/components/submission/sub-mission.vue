<template>
  <div style="display: flex; width: 100%">
    <figure class="media-left">
      <img class="image is-64x64" :src="submission.submissionImage" />
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>
            <a :href="submission.url" class="has-text-info">
              {{ submission.title }}
            </a>
            <span class="tag is-small">#{{ submission.id }}</span>
          </strong>
          <br />
          {{ submission.description }}
          <br />
          <small class="is-size-7">
            Submitted by:
            <img class="image is-24x24" :src="submission.avatar" />
          </small>
        </p>
      </div>
    </div>
    <div class="media-right">
      <span class="icon is-small">
        <i class="fa fa-chevron-up" @click="upvote(submission.id)"></i>
        <strong class="has-text-info">{{ submission.votes }}</strong>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

interface Props {
  id: number
  title: string
  description: string
  url: string
  votes: number
  avatar: string
  submissionImage: string
}

defineProps<{ submission: Props }>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{ (e: 'vote', id: number): void }>()

const upvote = (id: number) => {
  emits('vote', id)
}
</script>

<style scoped>
.content {
  text-align: left;
  padding-left: 20px;
}

.tag {
  font-size: 0.6rem !important;
}

.icon {
  cursor: pointer;
}

.image.is-24x24 {
  display: inline;
  position: relative;
  top: 5px;
  border-radius: 20px;
}
</style>
