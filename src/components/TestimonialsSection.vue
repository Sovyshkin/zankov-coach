<template>
  <section class="testimonials section section-dark">
    <div class="container">
      <div class="section-header fade-in" :class="{ visible: isVisible }">
        <h2>Что говорят мои клиенты</h2>
        <p>Отзывы тех, кто уже изменил свою жизнь</p>
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
              <div class="testimonial-content">
                <div class="quote-icon">❝</div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <div class="testimonial-rating">
                  <span v-for="star in 5" :key="star" class="star">⭐</span>
                </div>
              </div>
              
              <div class="testimonial-author">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="author-avatar" />
                <div class="author-info">
                  <h4 class="author-name">{{ testimonial.name }}</h4>
                  <p class="author-details">{{ testimonial.details }}</p>
                  <p class="author-result">{{ testimonial.result }}</p>
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
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

const isVisible = ref(false);
const currentSlide = ref(0);
const carouselContainer = ref<HTMLElement>();

interface Testimonial {
  name: string;
  avatar: string;
  text: string;
  details: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Анна Петрова',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    text: 'Владислав — это не просто тренер, это наставник! За 4 месяца работы с ним я не только похудела на 12 кг, но и полностью изменила отношение к спорту и питанию. Теперь здоровый образ жизни — это не мучение, а удовольствие!',
    details: 'Менеджер, 32 года',
    result: '-12 кг за 4 месяца'
  },
  {
    name: 'Михаил Соколов',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    text: 'После 40 думал, что уже поздно что-то менять. Владислав доказал обратное! Программа была составлена с учетом моих особенностей и ограничений. Результат превзошел все ожидания — я в лучшей форме за последние 15 лет!',
    details: 'IT-директор, 43 года',
    result: '-18 кг, +15% мышечной массы'
  },
  {
    name: 'Елена Козлова',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    text: 'Готовилась к свадьбе и хотела выглядеть идеально. Владислав создал индивидуальную программу, которая учитывала мои цели и временные рамки. В день свадьбы я была в восторге от своего отражения в зеркале!',
    details: 'Дизайнер, 28 лет',
    result: '-8 кг за 3 месяца'
  },
  {
    name: 'Дмитрий Волков',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    text: 'Спорт в моей жизни появился благодаря Владиславу. Он не только научил правильно тренироваться, но и привил любовь к активному образу жизни. Тренировки с ним — это всегда новый вызов и мотивация двигаться дальше.',
    details: 'Предприниматель, 35 лет',
    result: 'Набрал 10 кг мышечной массы'
  },
  {
    name: 'Ольга Смирнова',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    text: 'После рождения ребенка думала, что никогда не верну прежнюю форму. Владислав разработал специальную программу для молодых мам. Результат — не только красивое тело, но и море энергии для жизни с малышом!',
    details: 'Мама в декрете, 30 лет',
    result: 'Вернула форму после родов'
  }
];

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
  padding: var(--space-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.testimonial-content {
  flex: 1;
}

.quote-icon {
  font-size: 3rem;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-lg);
}

.testimonial-text {
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--color-white);
  margin-bottom: var(--space-lg);
  font-style: italic;
}

.testimonial-rating {
  display: flex;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
}

.star {
  font-size: 1.2rem;
  filter: drop-shadow(0 0 4px rgba(255, 193, 7, 0.6));
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-accent);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 1.1rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--space-xs);
}

.author-details {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--space-xs);
}

.author-result {
  font-size: 0.9rem;
  color: var(--color-accent);
  font-weight: var(--font-weight-semibold);
  margin: 0;
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
  
  .testimonials-container {
    padding: 0 var(--space-lg);
  }
  
  .testimonial-card {
    padding: var(--space-xl);
    border-radius: 16px;
    margin: 0 auto;
    max-width: 500px;
  }
  
  .quote-icon {
    font-size: 2.5rem;
    margin-bottom: var(--space-lg);
  }
  
  .testimonial-text {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: var(--space-xl);
  }
  
  .testimonial-author {
    flex-direction: column;
    text-align: center;
    gap: var(--space-md);
  }
  
  .author-avatar {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }
  
  .author-name {
    font-size: 1.1rem;
  }
  
  .author-title {
    font-size: 0.95rem;
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
  
  .testimonials-container {
    padding: 0 var(--space-md);
  }
  
  .testimonial-card {
    padding: var(--space-lg);
    border-radius: 12px;
  }
  
  .quote-icon {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
  
  .testimonial-text {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: var(--space-lg);
  }
  
  .author-avatar {
    width: 50px;
    height: 50px;
  }
  
  .author-name {
    font-size: 1rem;
  }
  
  .author-title {
    font-size: 0.9rem;
  }
  
  .carousel-controls {
    padding: 0 var(--space-md);
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
}
</style>