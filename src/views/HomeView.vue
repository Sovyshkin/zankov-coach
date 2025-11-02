<template>
  <div class="home">
    <h1>Добро пожаловать в {{ appStore.appName }}</h1>
    <p>Это главная страница приложения для коучинга.</p>
    
    <div class="loading" v-if="appStore.isLoading">
      Загрузка...
    </div>
    
    <div class="actions">
      <button @click="toggleLoading">
        {{ appStore.isLoading ? 'Остановить' : 'Запустить' }} загрузку
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

const toggleLoading = () => {
  appStore.setLoading(!appStore.isLoading);
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

.loading {
  margin: 1rem 0;
  color: #666;
  font-style: italic;
}

.actions {
  margin-top: 2rem;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #369870;
}
</style>