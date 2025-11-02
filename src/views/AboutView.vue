<template>
  <div class="about">
    <h1>О приложении {{ appStore.appInfo }}</h1>
    <p>
      ZankovCoach - это современное приложение для коучинга, построенное на Vue 3 с TypeScript.
    </p>
    
    <div class="tech-stack">
      <h2>Технологический стек:</h2>
      <ul>
        <li>Vue 3 с Composition API</li>
        <li>TypeScript</li>
        <li>Vite (сборщик)</li>
        <li>Vue Router (маршрутизация)</li>
        <li>Pinia (управление состоянием)</li>
        <li>ESLint + Prettier</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.tech-stack {
  margin-top: 2rem;
  text-align: left;
}

.tech-stack ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.tech-stack li {
  margin: 0.5rem 0;
}
</style>