<template>
  <section class="testimonials section section-dark">
    <div class="container">
      <div class="section-header fade-in" :class="{ visible: isVisible }">
        <h2>Что говорят мои клиенты</h2>
        <p>Реальные отзывы из Telegram</p>
      </div>
      
      <div class="testimonials-carousel">
        <div class="carousel-container" ref="carouselContainer">
          <div 
            class="testimonials-track"
            :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
          >
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              class="testimonial-card glass"
            >
              <div class="testimonial-screenshot" @click="openFullscreen(testimonial.screenshot)">
                <img 
                  :src="testimonial.screenshot" 
                  :alt="`Отзыв ${index + 1}`" 
                  class="screenshot-image"
                  @error="handleImageError"
                />
                <div class="telegram-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                  Telegram
                </div>
                <div class="fullscreen-hint">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Нажмите для увеличения
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="carousel-controls">
          <button 
            class="carousel-btn prev" 
            @click="prevSlide"
            :disabled="currentSlide === 0"
          >
            ‹
          </button>
          <div class="carousel-dots">
            <button 
              v-for="(_, index) in testimonials" 
              :key="index"
              class="dot"
              :class="{ active: index === currentSlide }"
              @click="goToSlide(index)"
            ></button>
          </div>
          <button 
            class="carousel-btn next" 
            @click="nextSlide"
            :disabled="currentSlide === testimonials.length - 1"
          >
            ›
          </button>
        </div>
      </div>
    </div>
    
    <!-- Fullscreen Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="isFullscreenOpen" class="fullscreen-modal" @click="closeFullscreen">
          <div class="fullscreen-content">
            <button class="close-btn" @click="closeFullscreen">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <img 
              :src="fullscreenImage" 
              alt="Отзыв в полном размере" 
              class="fullscreen-image"
              @click.stop
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue';

const isFullscreenOpen = ref(false);
const fullscreenImage = ref('');

const isVisible = ref(false);
const currentSlide = ref(0);
const carouselContainer = ref<HTMLElement>();

interface Testimonial {
  screenshot: string;
}

const testimonials: Testimonial[] = [
  {
    screenshot: '/feedback-1.PNG'
  },
  {
    screenshot: '/feedback-2.PNG'
  },
  {
    screenshot: '/feedback-3.PNG'
  },
  {
    screenshot: '/feedback-4.PNG'
  },
  {
    screenshot: '/feedback-5.PNG'
  },
  {
    screenshot: '/feedback-6.PNG'
  },
  {
    screenshot: '/feedback-7.PNG'
  }
];

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = '/feedback-1.PNG'; // Fallback image
};

const openFullscreen = (imageSrc: string) => {
  fullscreenImage.value = imageSrc;
  isFullscreenOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeFullscreen = () => {
  isFullscreenOpen.value = false;
  document.body.style.overflow = '';
};

// Handle Escape key to close fullscreen
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isFullscreenOpen.value) {
    closeFullscreen();
  }
};

const slideWidth = computed(() => {
  return 100; // 100% width per slide
});

const nextSlide = () => {
  if (currentSlide.value < testimonials.length - 1) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

// Auto-play carousel
let autoplayInterval: number;

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    if (currentSlide.value === testimonials.length - 1) {
      currentSlide.value = 0;
    } else {
      nextSlide();
    }
  }, 5000);
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

const observeSection = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          startAutoplay();
        } else {
          stopAutoplay();
        }
      });
    },
    { threshold: 0.3 }
  );

  const section = document.querySelector('.testimonials');
  if (section) observer.observe(section);
};

onMounted(() => {
  setTimeout(() => {
    observeSection();
  }, 100);
  
  // Add keyboard listener for Escape key
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  stopAutoplay();
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
.testimonials {
  background: linear-gradient(135deg, var(--color-black) 0%, var(--color-graphite) 100%);
  position: relative;
  overflow: hidden;
}

.testimonials::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 30% 70%, rgba(155, 255, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(155, 255, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
  position: relative;
  z-index: 2;
}

.section-header h2 {
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.section-header p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
}

.testimonials-carousel {
  position: relative;
  z-index: 2;
}

.carousel-container {
  overflow: hidden;
  border-radius: 20px;
}

.testimonials-track {
  display: flex;
  transition: transform var(--transition-smooth);
  will-change: transform;
}

.testimonial-card {
  min-width: 100%;
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.testimonial-screenshot {
  position: relative;
  max-width: 380px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  transition: all var(--transition-smooth);
  cursor: pointer;
}

.testimonial-screenshot:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.testimonial-screenshot:hover .fullscreen-hint {
  opacity: 1;
}

.screenshot-image {
  width: 100%;
  height: auto;
  display: block;
  border: 2px solid rgba(155, 255, 0, 0.2);
  border-radius: 16px;
}

.telegram-badge {
  position: absolute;
  top: var(--space-sm);
  right: var(--space-sm);
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(0, 136, 204, 0.9);
  backdrop-filter: blur(10px);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: var(--font-weight-semibold);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.telegram-badge svg {
  width: 12px;
  height: 12px;
}

.fullscreen-hint {
  position: absolute;
  bottom: var(--space-md);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  color: white;
  padding: var(--space-sm) var(--space-lg);
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: var(--font-weight-medium);
  opacity: 0;
  transition: opacity var(--transition-smooth);
  pointer-events: none;
}

.fullscreen-hint svg {
  width: 18px;
  height: 18px;
}

/* Fullscreen Modal */
.fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-xl);
}

.fullscreen-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreen-image {
  max-width: 100%;
  max-height: 90vh;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.5);
}

.close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all var(--transition-smooth);
  backdrop-filter: blur(10px);
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: var(--color-accent);
  transform: rotate(90deg);
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .fullscreen-content,
.modal-leave-active .fullscreen-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .fullscreen-content,
.modal-leave-to .fullscreen-content {
  transform: scale(0.8);
}

.carousel-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-xl);
  margin-top: var(--space-2xl);
}

.carousel-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-white);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all var(--transition-smooth);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.carousel-btn:hover:not(:disabled) {
  background: var(--color-accent);
  color: var(--color-black);
  transform: scale(1.1);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-dots {
  display: flex;
  gap: var(--space-sm);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.dot.active {
  background: var(--color-accent);
  transform: scale(1.2);
}

.dot:hover {
  background: rgba(155, 255, 0, 0.7);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .testimonials {
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
  
  .testimonial-card {
    padding: var(--space-lg);
  }
  
  .testimonial-screenshot {
    max-width: 320px;
  }
  
  .telegram-badge {
    top: 6px;
    right: 6px;
    padding: 3px 6px;
    font-size: 0.65rem;
    gap: 3px;
  }
  
  .telegram-badge svg {
    width: 10px;
    height: 10px;
  }
  
  .carousel-controls {
    gap: var(--space-lg);
    margin-top: var(--space-xl);
    padding: 0 var(--space-lg);
  }
  
  .carousel-btn {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
  
  .carousel-dots {
    margin-top: var(--space-lg);
  }
  
  .fullscreen-hint {
    font-size: 0.75rem;
    padding: var(--space-xs) var(--space-md);
  }
  
  .fullscreen-hint svg {
    width: 16px;
    height: 16px;
  }
  
  .fullscreen-modal {
    padding: var(--space-md);
  }
  
  .close-btn {
    top: -45px;
    width: 40px;
    height: 40px;
  }
  
  .close-btn svg {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 480px) {
  .testimonials {
    padding: var(--space-xl) 0;
  }
  
  .section-header {
    padding: 0 var(--space-md);
    margin-bottom: var(--space-xl);
  }
  
  .section-header h2 {
    font-size: clamp(1.8rem, 10vw, 2.2rem);
  }
  
  .testimonial-card {
    padding: var(--space-md);
    border-radius: 12px;
  }
  
  .testimonial-screenshot {
    max-width: 100%;
    border-radius: 12px;
  }
  
  .screenshot-image {
    border-radius: 12px;
  }
  
  .telegram-badge {
    top: 4px;
    right: 4px;
    padding: 2px 5px;
    font-size: 0.6rem;
    gap: 2px;
  }
  
  .telegram-badge svg {
    width: 9px;
    height: 9px;
  }
  
  .carousel-controls {
    padding: 0 var(--space-md);
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
  
  .fullscreen-hint {
    font-size: 0.7rem;
    padding: 6px var(--space-sm);
    bottom: var(--space-sm);
  }
  
  .fullscreen-hint svg {
    width: 14px;
    height: 14px;
  }
  
  .fullscreen-modal {
    padding: var(--space-sm);
  }
  
  .fullscreen-content {
    max-width: 95vw;
    max-height: 95vh;
  }
  
  .close-btn {
    top: -40px;
    width: 36px;
    height: 36px;
  }
  
  .close-btn svg {
    width: 20px;
    height: 20px;
  }
}
</style>