<template>
  <div class="context">
    <aside class="context-aside">
      <aside-menu />
    </aside>
    <main class="context-main">
      <!-- <home-view /> -->
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import asideMenu from '@/components/aside-menu/AsideMenu.vue'
</script>

<style scoped lang="scss">
.context {
  display: flex;
  width: 100%;

  .context-aside {
    width: 260px;
    padding: 20px;
    height: calc(100vh - 116px);
    border-right: thin solid hsl(0, 0%, 96%);
    overflow-y: auto;
  }

  .context-main {
    flex: 1;
    height: calc(100vh - 116px);
    overflow-y: auto;
  }
}
</style>
