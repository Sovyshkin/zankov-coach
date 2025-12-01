<template>
  <section class="transformations section">
    <div class="container">
      <div class="section-header fade-in" :class="{ visible: isVisible }">
        <h2>Реальные результаты</h2>
        <p>Трансформации моих клиентов говорят сами за себя</p>
      </div>
      
      <div class="transformations-grid">
        <div 
          v-for="(transformation, index) in visibleTransformations" 
          :key="index"
          class="transformation-card fade-in"
          :class="{ visible: isVisible }"
          :style="{ transitionDelay: `${index * 0.2}s` }"
        >
          <div class="transformation-images">
            <div class="image-carousel" v-if="transformation.images.length > 1">
              <div class="carousel-container">
                <div 
                  class="images-track"
                  :style="{ transform: `translateX(-${getCarouselSlide(index) * 100}%)` }"
                >
                  <div 
                    v-for="(image, imageIndex) in transformation.images" 
                    :key="imageIndex"
                    class="carousel-slide"
                  >
                    <img :src="image" :alt="`${transformation.name} - фото ${imageIndex + 1}`" class="client-image" />
                  </div>
                </div>
                
                <!-- Navigation buttons -->
                <button 
                  v-if="transformation.images.length > 1"
                  class="carousel-nav prev" 
                  @click="prevImage(index)"
                >
                  ‹
                </button>
                <button 
                  v-if="transformation.images.length > 1"
                  class="carousel-nav next" 
                  @click="nextImage(index)"
                >
                  ›
                </button>
                
                <!-- Dots indicator -->
                <div class="carousel-dots" v-if="transformation.images.length > 1">
                  <span
                    v-for="(_, imageIndex) in transformation.images"
                    :key="imageIndex"
                    class="dot"
                    :class="{ active: getCarouselSlide(index) === imageIndex }"
                    @click="goToImage(index, imageIndex)"
                  ></span>
                </div>
              </div>
            </div>
            
            <!-- Single image -->
            <div class="single-image" v-else>
              <img :src="transformation.images[0]" :alt="transformation.name" class="client-image" />
            </div>
          </div>
          
          <div class="transformation-info">
            <h3>{{ transformation.name }}</h3>
            <div class="transformation-stats">
              <div class="stat">
                <span class="stat-value">{{ transformation.weightLoss }}</span>
                <span class="stat-label">потеря веса</span>
              </div>
              <div class="stat">
                <span class="stat-value">{{ transformation.duration }}</span>
                <span class="stat-label">за период</span>
              </div>
            </div>
            <p class="transformation-description">{{ transformation.description }}</p>
          </div>
        </div>
      </div>
      
      <div class="view-all-section fade-in" :class="{ visible: isVisible }">
        <button class="btn btn-secondary" @click="goToAllTransformations">
          Смотреть все результаты
        </button>
      </div>
      
      <div class="transformation-cta fade-in" :class="{ visible: isVisible }">
        <p>Готов стать следующим в этом списке?</p>
        <button class="btn btn-primary" @click="openTelegramChat">
          Начать трансформацию
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isVisible = ref(false);
const carouselSlides = reactive<Record<number, number>>({});

// Вычисляемое свойство для показа карточек
const visibleTransformations = computed(() => {
  // Показываем только первые 4 карточки на главной странице
  return transformations.slice(0, 4);
});

interface Transformation {
  name: string;
  images: string[];
  weightLoss: string;
  duration: string;
  description: string;
}

const transformations: Transformation[] = [
  {
    name: 'Юлия',
    images: ['/client-1.png'],
    weightLoss: '+2 кг',
    duration: '2 месяца',
    description: ''
  },
  {
    name: 'Римма',
    images: ['/client-2.png'],
    weightLoss: '+4 кг',
    duration: '3 месяца',
    description: ''
  },
  {
    name: 'Олеся',
    images: ['/client-3.jpg'],
    weightLoss: '+4 кг',
    duration: '6 месяцев',
    description: ''
  },
  {
    name: 'Кристина',
    images: ['/client-4.jpg'],
    weightLoss: '-4 кг',
    duration: '1 месяц',
    description: ''
  },
  {
    name: 'Ольга',
    images: ['/client-5-1.jpeg', '/client-5-2.jpeg'],
    weightLoss: '+1,5 кг',
    duration: '3 месяца',
    description: ''
  },
  {
    name: 'Анастасия',
    images: ['/client-6.png'],
    weightLoss: '-4 кг',
    duration: '4 месяца',
    description: ''
  },
  {
    name: 'Самир',
    images: ['/client-7.jpg'],
    weightLoss: '+3 кг',
    duration: '1 год',
    description: ''
  },
  {
    name: 'Рустам',
    images: ['/client-8-1.jpg', '/client-8-2.jpg'],
    weightLoss: '-5 кг жира',
    duration: '3 месяца',
    description: ''
  },
  {
    name: 'Ярослав',
    images: ['/client-10.jpg'],
    weightLoss: '+2 кг',
    duration: '5 месяцев',
    description: ''
  }
];

// Carousel functions
const getCarouselSlide = (cardIndex: number) => {
  return carouselSlides[cardIndex] || 0;
};

const nextImage = (cardIndex: number) => {
  const transformation = transformations[cardIndex];
  if (!transformation) return;
  const currentSlide = carouselSlides[cardIndex] || 0;
  carouselSlides[cardIndex] = currentSlide === transformation.images.length - 1 ? 0 : currentSlide + 1;
};

const prevImage = (cardIndex: number) => {
  const transformation = transformations[cardIndex];
  if (!transformation) return;
  const currentSlide = carouselSlides[cardIndex] || 0;
  carouselSlides[cardIndex] = currentSlide === 0 ? transformation.images.length - 1 : currentSlide - 1;
};

const goToImage = (cardIndex: number, imageIndex: number) => {
  carouselSlides[cardIndex] = imageIndex;
};

const openTelegramChat = () => {
  window.open('https://t.me/Vladislav_Zankov', '_blank', 'noopener,noreferrer');
};

const goToAllTransformations = () => {
  router.push('/transformations');
};

const observeSection = () => {
  // Определяем настройки в зависимости от размера экрана
  const isMobile = window.innerWidth <= 768;
  const threshold = isMobile ? 0.05 : 0.1; // Меньший порог для мобильных
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    { threshold: threshold }
  );

  const section = document.querySelector('.transformations');
  if (section) observer.observe(section);
};

onMounted(() => {
  setTimeout(() => {
    observeSection();
    // Принудительно активируем на маленьких экранах
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        isVisible.value = true;
      }, 500);
    }
  }, 100);
});
</script>

<style scoped>
.transformations {
  background: linear-gradient(135deg, var(--color-black) 0%, var(--color-graphite) 100%);
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.section-header h2 {
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.section-header p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
}

.transformations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

.transformation-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(155, 255, 0, 0.2);
  border-radius: 20px;
  padding: var(--space-xl);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all var(--transition-smooth);
  opacity: 0;
  transform: translateY(30px);
}

.transformation-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.transformation-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.transformation-images {
  margin-bottom: var(--space-xl);
}

/* Image carousel styles */
.image-carousel {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 300px;
}

.images-track {
  display: flex;
  height: 100%;
  transition: transform 0.3s ease;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
}

.client-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.single-image {
  border-radius: 16px;
  overflow: hidden;
  height: 300px;
}

.single-image .client-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Navigation buttons */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition: all var(--transition-smooth);
  opacity: 0;
  z-index: 2;
}

.image-carousel:hover .carousel-nav {
  opacity: 1;
}

.carousel-nav:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: translateY(-50%) scale(1.1);
}

.carousel-nav.prev {
  left: 10px;
}

.carousel-nav.next {
  right: 10px;
}

/* Dots indicator */
.carousel-dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.dot.active {
  background: var(--color-accent);
  transform: scale(1.2);
}

.dot:hover {
  background: rgba(255, 255, 255, 0.8);
}

.transformation-info h3 {
  font-size: 1.3rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--space-md);
  text-align: center;
}

.transformation-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: var(--space-lg);
  padding: var(--space-md);
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.1), rgba(155, 255, 0, 0.05));
  border-radius: 12px;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.transformation-description {
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0;
}

.view-all-section {
  text-align: center;
  margin-bottom: var(--space-2xl);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.view-all-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
  padding: var(--space-md) var(--space-2xl);
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.btn-secondary:hover {
  background: var(--color-accent);
  color: var(--color-graphite);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(155, 255, 0, 0.3);
}

.transformation-cta {
  text-align: center;
  padding: var(--space-2xl);
  background: linear-gradient(135deg, rgba(17, 17, 17, 0.8), rgba(42, 42, 42, 0.9));
  border-radius: 20px;
  color: var(--color-white);
}

.transformation-cta p {
  font-size: 1.2rem;
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-lg);
  color: var(--color-white);
}

/* Hover effects for images */
.transformation-card:hover .client-image {
  transform: scale(1.02);
}

/* Large screens */
@media (max-width: 1400px) {
  .transformations-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
}

/* Medium screens */
@media (max-width: 1024px) {
  .transformations-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
}

/* Small tablets */
@media (max-width: 900px) {
  .transformations-grid {
    grid-template-columns: 1fr; /* Одна колонка на планшетах */
    gap: var(--space-lg);
  }
  
  .transformation-card {
    max-width: 500px; /* Больше места на планшетах */
    margin: 0 auto;
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .transformations {
    padding: var(--space-2xl) 0;
  }
  
  .section-header {
    margin-bottom: var(--space-2xl);
    padding: 0 var(--space-lg);
  }
  
  .section-header h2 {
    font-size: clamp(2rem, 8vw, 2.5rem);
    line-height: 1.2;
  }
  
  .section-header p {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .transformations-grid {
    grid-template-columns: 1fr; /* Одна колонка на мобильных */
    gap: var(--space-xl);
    padding: 0 var(--space-lg);
  }
  
  .transformation-card {
    max-width: 400px; /* Ограничиваем максимальную ширину */
    margin: 0 auto; /* Центрируем карточки */
    padding: var(--space-xl);
    border-radius: 16px;
  }
  
  .carousel-container {
    height: 250px;
  }
  
  .single-image {
    height: 250px;
  }
  
  .carousel-nav {
    opacity: 1; /* Always visible on mobile */
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
  
  .carousel-nav.prev {
    left: 8px;
  }
  
  .carousel-nav.next {
    right: 8px;
  }
  
  .transformation-info h3 {
    font-size: 1.3rem;
    margin-bottom: var(--space-md);
  }
  
  .client-story {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }
  
  .transformation-stats {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
  }
  
  .stat {
    padding: var(--space-md);
    border-radius: 8px;
  }
  
  .stat-value {
    font-size: 1.5rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
  
  .view-all-section {
    margin-bottom: var(--space-xl);
  }
  
  .btn-secondary {
    font-size: 0.95rem;
    padding: var(--space-sm) var(--space-xl);
  }
}

@media (max-width: 480px) {
  .transformations {
    padding: var(--space-xl) 0;
  }
  
  .section-header {
    padding: 0 var(--space-sm);
    margin-bottom: var(--space-xl);
  }
  
  .section-header h2 {
    font-size: clamp(1.8rem, 10vw, 2.2rem);
  }
  
  .transformations-grid {
    padding: 0 var(--space-sm);
    gap: var(--space-lg);
  }
  
  .transformation-card {
    padding: var(--space-md);
    border-radius: 12px;
    margin-bottom: var(--space-lg);
  }
  
  .carousel-container {
    height: 220px;
  }
  
  .single-image {
    height: 220px;
  }
  
  .carousel-nav {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }
  
  .carousel-nav.prev {
    left: 6px;
  }
  
  .carousel-nav.next {
    right: 6px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
  }
  
  .transformation-info h3 {
    font-size: 1.2rem;
  }
  
  .client-story {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .transformation-stats {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Две колонки для статистики */
    gap: var(--space-xs);
    margin-bottom: var(--space-md);
  }
  
  .stat {
    text-align: center;
    padding: var(--space-xs);
  }
  
  .stat-value {
    font-size: 1.3rem;
  }
  
  .stat-label {
    font-size: 0.85rem;
  }
  
  .transformation-description {
    font-size: 0.9rem;
    margin-top: var(--space-md);
  }
  
  .transformation-cta {
    margin: 0 var(--space-sm);
    padding: var(--space-md);
    border-radius: 12px;
  }
  
  .transformation-cta p {
    font-size: 1rem;
    margin-bottom: var(--space-sm);
    line-height: 1.3;
    padding: 0;
  }
  
  .transformation-cta .btn {
    font-size: 0.9rem;
    padding: var(--space-sm) var(--space-md);
    max-width: 240px;
    width: 100%;
  }
  
  .view-all-section {
    margin-bottom: var(--space-lg);
  }
  
  .btn-secondary {
    font-size: 0.9rem;
    padding: var(--space-sm) var(--space-lg);
    width: calc(100% - var(--space-xl));
    max-width: 280px;
  }
}
</style>