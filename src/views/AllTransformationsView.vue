<template>
  <div class="all-transformations-page">
    <!-- Header Section -->
    <section class="page-header">
      <div class="container">
        <div class="header-content fade-in" :class="{ visible: isVisible }">
          <router-link to="/" class="back-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Назад
          </router-link>
          <h1>Все трансформации</h1>
          <p>Впечатляющие результаты моих клиентов</p>
        </div>
      </div>
    </section>

    <!-- Transformations Grid -->
    <section class="transformations-section">
      <div class="container">
        <div class="transformations-grid">
          <div 
            v-for="(transformation, index) in transformations" 
            :key="index"
            class="transformation-card fade-in"
            :class="{ visible: isVisible }"
            :style="{ transitionDelay: `${(index % 6) * 0.1}s` }"
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
                      <img 
                      :src="image" 
                      :alt="`${transformation.name} - фото ${imageIndex + 1}`" 
                      class="client-image"
                      @click="openFullscreen(image, transformation.name)"
                    />
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
                <img 
                :src="transformation.images[0]" 
                :alt="transformation.name" 
                class="client-image"
                @click="transformation.images[0] && openFullscreen(transformation.images[0], transformation.name)"
              />
              </div>
            </div>
            
            <div class="transformation-info">
              <h3>{{ transformation.name }}</h3>
              <div class="transformation-stats">
                <div class="stat">
                  <span class="stat-value">{{ transformation.weightLoss }}</span>
                  <span class="stat-label">изменение веса</span>
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

        <!-- CTA Section -->
        <div class="transformation-cta fade-in" :class="{ visible: isVisible }">
          <p>Хотите стать следующим в этом списке успеха?</p>
          <button class="btn btn-primary" @click="openTelegramChat">
            Начать свою трансформацию
          </button>
        </div>
      </div>
    </section>
  </div>

  <!-- Fullscreen Modal -->
  <Teleport to="body">
    <div 
      v-if="isFullscreenOpen" 
      class="fullscreen-modal"
      @click="closeFullscreen"
      @keydown.esc="closeFullscreen"
    >
      <div class="fullscreen-content" @click.stop>
        <button class="close-btn" @click="closeFullscreen">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img :src="fullscreenImage" :alt="fullscreenTitle" class="fullscreen-image" />
        <div class="fullscreen-title">{{ fullscreenTitle }}</div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';

const isVisible = ref(false);
const carouselSlides = reactive<Record<number, number>>({});

// Fullscreen modal state
const isFullscreenOpen = ref(false);
const fullscreenImage = ref('');
const fullscreenTitle = ref('');

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

const openFullscreen = (imageUrl: string, title: string) => {
  fullscreenImage.value = imageUrl;
  fullscreenTitle.value = title;
  isFullscreenOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeFullscreen = () => {
  isFullscreenOpen.value = false;
  fullscreenImage.value = '';
  fullscreenTitle.value = '';
  document.body.style.overflow = 'auto';
};

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);

  // Обработчик клавиши Escape для закрытия модального окна
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isFullscreenOpen.value) {
      closeFullscreen();
    }
  };
  
  document.addEventListener('keydown', handleEscape);
});
</script>

<style scoped>
.all-transformations-page {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--color-black) 0%, var(--color-graphite) 100%);
}

/* Header Section */
.page-header {
  padding: var(--space-3xl) 0 var(--space-2xl);
  border-bottom: 1px solid rgba(155, 255, 0, 0.1);
}

.header-content {
  text-align: center;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.6s ease;
}

.header-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-accent);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-xl);
  transition: all var(--transition-smooth);
}

.back-link:hover {
  gap: var(--space-md);
  color: var(--color-white);
}

.back-link svg {
  transition: transform var(--transition-smooth);
}

.back-link:hover svg {
  transform: translateX(-5px);
}

.header-content h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--space-md);
  line-height: 1.2;
}

.header-content p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Transformations Section */
.transformations-section {
  padding: var(--space-3xl) 0;
}

.transformations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
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
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(155, 255, 0, 0.4);
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

/* Hover effects for images */
.transformation-card:hover .before-image {
  transform: scale(1.05);
  filter: grayscale(0.5);
}

.transformation-card:hover .after-image {
  transform: scale(1.05);
  filter: brightness(1.1);
}

/* CTA Section */
.transformation-cta {
  text-align: center;
  padding: var(--space-2xl);
  background: linear-gradient(135deg, rgba(17, 17, 17, 0.8), rgba(42, 42, 42, 0.9));
  border-radius: 20px;
  color: var(--color-white);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.transformation-cta.visible {
  opacity: 1;
  transform: translateY(0);
}

.transformation-cta p {
  font-size: 1.2rem;
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-lg);
  color: var(--color-white);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .transformations-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: var(--space-lg);
  }
}

@media (max-width: 900px) {
  .transformations-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: var(--space-2xl) 0 var(--space-xl);
  }

  .header-content h1 {
    font-size: clamp(2rem, 8vw, 2.5rem);
  }

  .header-content p {
    font-size: 1rem;
  }

  .transformations-section {
    padding: var(--space-2xl) 0;
  }

  .transformations-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .transformation-card {
    max-width: 400px;
    margin: 0 auto;
    padding: var(--space-lg);
  }

  .carousel-container {
    height: 250px;
  }

  .single-image {
    height: 250px;
  }

  .carousel-nav {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }

  .dot {
    width: 8px;
    height: 8px;
  }

  .transformation-cta {
    padding: var(--space-xl);
  }

  .transformation-cta p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .page-header {
    padding: var(--space-xl) 0;
  }

  .header-content h1 {
    font-size: clamp(1.8rem, 10vw, 2.2rem);
  }

  .transformations-section {
    padding: var(--space-xl) 0;
  }

  .transformation-card {
    padding: var(--space-md);
  }

  .carousel-container {
    height: 200px;
  }

  .single-image {
    height: 200px;
  }

  .carousel-nav {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }

  .carousel-nav.prev {
    left: 5px;
  }

  .carousel-nav.next {
    right: 5px;
  }

  .dot {
    width: 6px;
    height: 6px;
  }

  .carousel-dots {
    gap: 6px;
  }

  .transformation-info h3 {
    font-size: 1.2rem;
  }

  .stat-value {
    font-size: 1.3rem;
  }

  .transformation-description {
    font-size: 0.9rem;
  }
}

/* Fullscreen Modal Styles */
.fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  animation: fadeIn 0.3s ease-out;
}

.fullscreen-content {
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: scaleIn 0.3s ease-out;
}

.close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10001;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.fullscreen-image {
  max-width: 100%;
  max-height: calc(95vh - 80px);
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.fullscreen-title {
  color: white;
  font-size: 1.2rem;
  font-weight: var(--font-weight-semibold);
  margin-top: var(--space-lg);
  text-align: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Mobile fullscreen styles */
@media (max-width: 768px) {
  .close-btn {
    top: -45px;
    right: 10px;
    width: 35px;
    height: 35px;
  }
  
  .fullscreen-image {
    max-height: calc(95vh - 60px);
  }
  
  .fullscreen-title {
    font-size: 1rem;
    margin-top: var(--space-md);
  }
}

/* Cursor pointer for clickable images */
.client-image {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.client-image:hover {
  transform: scale(1.02);
}
</style>
