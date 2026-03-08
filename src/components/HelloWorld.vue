<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">Нажали {{ count }} раз</button>
    <p>
      Отредактируйте
      <code>components/HelloWorld.vue</code>, чтобы проверить HMR
    </p>
  </div>

  <p>
    Посмотрите
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    > — официальный стартовый шаблон Vue + Vite.
  </p>
  <p>
    Подробнее об поддержке IDE для Vue в
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >руководстве Vue Docs</a
    >.
  </p>
  <p class="read-the-docs">Нажмите на логотипы Vite и Vue, чтобы узнать больше</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
