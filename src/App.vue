<template>
  <div id="#app">
    <header>
      <nav-bar />
    </header>
    <div class="context">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/navbar/nav-bar.vue'
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css';
@import '@/assets/font-awesome/css/font-awesome.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: thin solid hsl(0, 0%, 96%);
}

.context {
  width: 100%;
  margin-top: 116px;
}
</style>
