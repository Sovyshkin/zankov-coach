<template>
  <section class="hero">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
      <div class="container">
        <div class="hero-layout">
          <!-- Левая колонка - Простая карусель фотографий -->
          <div class="hero-portrait slide-right" :class="{ visible: isVisible }">
            <div class="simple-carousel">
              <div class="photo-container">
                <!-- Фотографии с плавным переходом -->
                <div 
                  v-for="(photo, index) in trainerPhotos" 
                  :key="index"
                  class="photo-slide"
                  :class="{ active: currentSlide === index }"
                >
                  <img 
                    :src="photo.src" 
                    :alt="photo.alt"
                    class="trainer-photo"
                    @error="handleImageError"
                  />
                </div>
                
                <!-- Навигация появляется при наведении -->
                <button 
                  class="nav-btn prev" 
                  @click="prevSlide" 
                  @mouseenter="stopAutoSlide"
                  @mouseleave="startAutoSlide"
                >‹</button>
                <button 
                  class="nav-btn next" 
                  @click="nextSlide"
                  @mouseenter="stopAutoSlide" 
                  @mouseleave="startAutoSlide"
                >›</button>
              </div>
              
              <!-- Индикаторы -->
              <div class="simple-indicators">
                <span
                  v-for="(_, index) in trainerPhotos"
                  :key="index"
                  class="dot"
                  :class="{ active: currentSlide === index }"
                  @click="goToSlide(index)"
                  @mouseenter="stopAutoSlide"
                  @mouseleave="startAutoSlide"
                ></span>
              </div>
            </div>
          </div>
          
          <!-- Правая колонка - Описание и CTA -->
          <div class="hero-info">
            <div class="hero-text fade-in" :class="{ visible: isVisible }">
              <div class="trainer-intro">
                <h1 class="trainer-name">Владислав Заньков</h1>
                <p class="trainer-title">Персональный тренер</p>
              </div>
              
              <div class="trainer-description">
                <h2 class="description-title">
                  Преврати свое тело в 
                  <span class="text-accent">произведение искусства</span>
                </h2>
                <p class="description-text">
                  Более 5 лет опыта работы в фитнес индустрии. Помог более чем 100 клиентам достричь желаемых результатов.
                </p>
                
                <div class="expertise-list">
                  <div class="expertise-item">
                    <div class="expertise-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <span class="expertise-text">Работаю над улучшением качества тела и жизни</span>
                  </div>
                  
                  <div class="expertise-item">
                    <div class="expertise-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <span class="expertise-text">Набор мышечной массы</span>
                  </div>
                  
                  <div class="expertise-item">
                    <div class="expertise-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <span class="expertise-text">Повышение силовых показателей</span>
                  </div>
                  
                  <div class="expertise-item">
                    <div class="expertise-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <span class="expertise-text">Снижение веса за счет жирового компонента</span>
                  </div>
                  
                  <div class="expertise-item">
                    <div class="expertise-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <span class="expertise-text">Помогаю убрать боль в пояснице и суставах</span>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div class="hero-cta slide-left" :class="{ visible: isVisible }">
              <button class="btn btn-primary" @click="$emit('openContactForm')">
                Записаться на консультацию
              </button>
              <p class="cta-note">Первая консультация бесплатно</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';

// Define emits
const emit = defineEmits<{
  openContactForm: []
}>();

const isVisible = ref(false);
const currentSlide = ref(0);
let autoSlideInterval: number | null = null;

// Данные для карусели с локальными фотографиями
const trainerPhotos = [
  {
    src: '/coach.webp',
    alt: 'Владислав Заньков - персональный фитнес-тренер'
  },
  {
    src: '/coach-1.jpg',
    alt: 'Владислав Заньков - персональный фитнес-тренер'
  },
  {
    src: '/coach-2.jpg',
    alt: 'Владислав Заньков - тренировка'
  },
  {
    src: '/coach-3.jpg',
    alt: 'Владислав Заньков - работа с клиентом'
  },
  {
    src: '/coach-4.jpg',
    alt: 'Владислав Заньков - демонстрация упражнений'
  },
  {
    src: '/coach-5.jpg',
    alt: 'Владислав Заньков - в спортзале'
  },
  {
    src: '/coach-6.jpg',
    alt: 'Владислав Заньков - персональная тренировка'
  },
  {
    src: '/coach-7.jpg',
    alt: 'Владислав Заньков - профессиональное фото'
  }
];

// Функции навигации
const nextSlide = () => {
  currentSlide.value = currentSlide.value === trainerPhotos.length - 1 ? 0 : currentSlide.value + 1;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? trainerPhotos.length - 1 : currentSlide.value - 1;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
  // Перезапускаем автопереключение после ручного выбора
  restartAutoSlide();
};

// Автопереключение
const startAutoSlide = () => {
  autoSlideInterval = window.setInterval(nextSlide, 10000); // 15 секунд
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

const restartAutoSlide = () => {
  stopAutoSlide();
  startAutoSlide();
};

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
  
  // Запускаем автопереключение через 3 секунды после загрузки
  setTimeout(startAutoSlide, 3000);
});

onUnmounted(() => {
  stopAutoSlide();
});

const handleImageError = (event: Event) => {
  // Если изображение не загрузилось, показываем fallback из локальных фото
  const img = event.target as HTMLImageElement;
  img.src = '/coach.webp'; // Используем основное фото как fallback
};
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  padding: 120px 0 var(--space-2xl) 0;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(135deg, var(--color-black) 0%, var(--color-graphite) 100%);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(155, 255, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(155, 255, 0, 0.05) 0%, transparent 50%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  color: var(--color-white);
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: flex-start;
  min-height: 80vh;
}

/* Портрет тренера */
.hero-portrait {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.portrait-container {
  position: relative;
  width: 500px;
  height: 600px;
  max-width: 100%;
}

.trainer-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  /* Старые стили убраны для производительности */
}

/* portrait-frame стили убраны - больше не используются */

/* Информация о тренере */
.hero-info {
  padding-left: var(--space-xl);
}

.trainer-intro {
  margin-bottom: var(--space-xl);
}

.trainer-name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: var(--font-weight-extrabold);
  line-height: 1.1;
  margin-bottom: var(--space-md);
  display: block;
  background: linear-gradient(135deg, var(--color-white) 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.trainer-title {
  font-size: 1.3rem;
  color: var(--color-accent);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.trainer-description {
  margin-bottom: var(--space-2xl);
}

.description-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  margin-bottom: var(--space-lg);
  color: var(--color-white);
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--space-lg);
}

.expertise-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.expertise-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xs) 0;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideInExpertise 0.6s ease-out forwards;
}

.expertise-item:nth-child(1) { animation-delay: 0.1s; }
.expertise-item:nth-child(2) { animation-delay: 0.2s; }
.expertise-item:nth-child(3) { animation-delay: 0.3s; }
.expertise-item:nth-child(4) { animation-delay: 0.4s; }
.expertise-item:nth-child(5) { animation-delay: 0.5s; }

.expertise-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, var(--color-accent) 0%, rgba(155, 255, 0, 0.8) 100%);
  border-radius: 50%;
  flex-shrink: 0;
  /* Убираем transitions для производительности */
}

.expertise-icon svg {
  width: 14px;
  height: 14px;
  color: var(--color-black);
  /* Убираем transitions для производительности */
}

.expertise-text {
  font-size: 0.9rem;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.9);
  font-weight: var(--font-weight-medium);
  /* Убираем transitions для производительности */
}

@keyframes slideInExpertise {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Карусель с плавными переходами */
.simple-carousel {
  position: relative;
  width: 500px;
  height: 600px;
  max-width: 100%;
}

.photo-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1), 
              box-shadow 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.photo-container:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45);
}

.photo-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(1.1);
  transition: all 1.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.photo-slide.active {
  opacity: 1;
  transform: scale(1);
  animation: photoBreathing 16s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
}

@keyframes photoBreathing {
  0%, 100% { 
    transform: scale(1);
    filter: brightness(1) saturate(1);
  }
  50% { 
    transform: scale(1.01);
    filter: brightness(1.05) saturate(1.1);
  }
}

.trainer-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  /* Добавляем очень плавный blur эффект */
  filter: blur(0px) brightness(1) saturate(1);
  transition: filter 1.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.photo-slide:not(.active) .trainer-photo {
  filter: blur(4px) brightness(0.6) saturate(0.8);
}

/* Навигация появляется при наведении */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(0.7);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  z-index: 10;
  opacity: 0;
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  backdrop-filter: blur(10px);
}

.photo-container:hover .nav-btn {
  opacity: 1;
  transform: translateY(-50%) scale(1);
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-50%) scale(1.2);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.nav-btn.prev {
  left: 10px;
}

.nav-btn.next {
  right: 10px;
}

/* Индикаторы с плавными переходами */
.simple-indicators {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.dot:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: scale(1.3);
}

.dot.active {
  background: var(--color-accent);
  transform: scale(1.3);
  position: relative;
  overflow: hidden;
}

.dot.active::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
  animation: dotShimmer 4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
}

@keyframes dotShimmer {
  0% { 
    left: -120%; 
    opacity: 0;
    transform: scale(0.8);
  }
  25% { 
    opacity: 0.6;
    transform: scale(1);
  }
  75% { 
    opacity: 0.6;
    transform: scale(1);
  }
  100% { 
    left: 120%; 
    opacity: 0;
    transform: scale(0.8);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-cta {
  text-align: left;
}

.cta-note {
  margin-top: var(--space-md);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-style: italic;
}

/* Большие экраны - еще более компактный вид */
@media (min-width: 1400px) {
  .expertise-list {
    gap: var(--space-xs);
    margin-bottom: var(--space-lg);
  }
  
  .expertise-item {
    padding: 2px 0;
  }
  
  .expertise-icon {
    width: 20px;
    height: 20px;
  }
  
  .expertise-icon svg {
    width: 12px;
    height: 12px;
  }
  
  .expertise-text {
    font-size: 0.85rem;
    line-height: 1.2;
  }
}

/* Адаптивность */
@media (max-width: 1024px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
    text-align: center;
  }
  
  .hero-info {
    padding-left: 0;
  }
  
  .portrait-container {
    width: 450px;
    height: 550px;
  }
}

@media (max-width: 900px) and (min-width: 769px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
    text-align: center;
  }
  
  .hero-portrait {
    order: 1;
  }
  
  .hero-info {
    order: 2;
    padding-left: 0;
  }
  
  .simple-carousel {
    width: 350px;
    height: 430px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0 var(--space-xl) 0;
    min-height: auto;
  }
  
  .hero-layout {
    flex-direction: column;
    gap: var(--space-2xl);
    text-align: left;
  }
  
  .hero-portrait {
    order: 1;
    align-self: center;
  }
  
  .hero-info {
    order: 2;
    max-width: 100%;
    text-align: left;
  }
  
  .portrait-container {
    width: 250px;
    height: 300px;
    margin: 0 auto;
  }
  
  .trainer-name {
    font-size: clamp(2.2rem, 8vw, 2.8rem);
    line-height: 1.1;
  }
  
  .trainer-title {
    font-size: 1.1rem;
    margin-bottom: var(--space-lg);
  }
  
  .description-title {
    font-size: clamp(1.6rem, 6vw, 2rem);
    line-height: 1.2;
    margin-bottom: var(--space-lg);
  }
  
  .description-text {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }
  
  .expertise-list {
    gap: var(--space-sm);
    margin-bottom: var(--space-xl);
  }
  
  .expertise-item {
    gap: var(--space-sm);
    padding: var(--space-xs) 0;
  }
  
  .expertise-icon {
    width: 28px;
    height: 28px;
  }
  
  .expertise-icon svg {
    width: 16px;
    height: 16px;
  }
  
  .expertise-text {
    font-size: 0.95rem;
    line-height: 1.3;
  }
  
  .btn-primary {
    font-size: 1rem;
    padding: var(--space-md) var(--space-xl);
    width: 100%;
    max-width: 320px;
  }
  
  .cta-note {
    font-size: 0.9rem;
    margin-top: var(--space-md);
    text-align: left;
  }
  
  /* Адаптивные стили */
  .simple-carousel {
    width: 450px;
    height: 550px;
  }
  
  .nav-btn {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
  
  .nav-btn.prev {
    left: 8px;
  }
  
  .nav-btn.next {
    right: 8px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 70px 0 var(--space-lg) 0;
  }
  
  .hero-layout {
    gap: var(--space-xl);
    padding: 0 var(--space-md);
    text-align: left;
  }
  
  .portrait-container {
    width: 220px;
    height: 270px;
  }
  
  .trainer-name {
    font-size: clamp(2rem, 10vw, 2.5rem);
  }
  
  .trainer-title {
    font-size: 1rem;
  }
  
  .description-title {
    font-size: clamp(1.4rem, 7vw, 1.8rem);
    line-height: 1.1;
  }
  
  .description-text {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }
  
  .expertise-list {
    gap: var(--space-xs);
    margin-bottom: var(--space-lg);
  }
  
  .expertise-item {
    gap: var(--space-xs);
  }
  
  .expertise-icon {
    width: 24px;
    height: 24px;
  }
  
  .expertise-icon svg {
    width: 14px;
    height: 14px;
  }
  
  .expertise-text {
    font-size: 0.9rem;
    line-height: 1.2;
  }
  
  .btn-primary {
    font-size: 0.95rem;
    padding: var(--space-md) var(--space-lg);
    white-space: normal;
    line-height: 1.3;
    min-height: 48px;
  }
  
  .cta-note {
    font-size: 0.85rem;
    text-align: left;
  }
  
  .trainer-intro {
    margin-bottom: var(--space-lg);
    text-align: left;
  }
  
  .trainer-description {
    margin-bottom: var(--space-lg);
    text-align: left;
  }
  
  /* Мобильные стили */
  .simple-carousel {
    width: 220px;
    height: 270px;
  }
  
  .nav-btn {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
  
  .nav-btn.prev {
    left: 5px;
  }
  
  .nav-btn.next {
    right: 5px;
  }
  
  .dot {
    width: 10px;
    height: 10px;
  }
  
  .simple-indicators {
    bottom: -35px;
    gap: 6px;
  }
  
  /* На мобильных стрелки всегда видны для удобства */
  .nav-btn {
    opacity: 0.7;
  }
  
  .photo-container:hover .nav-btn {
    opacity: 1;
  }
  
  /* Отключаем тяжелые анимации на мобильных для производительности */
  .photo-slide.active {
    animation: none;
  }
  
  .photo-container:hover {
    transform: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  .trainer-photo {
    filter: none;
  }
  
  .photo-slide:not(.active) .trainer-photo {
    filter: none;
  }
}
</style>