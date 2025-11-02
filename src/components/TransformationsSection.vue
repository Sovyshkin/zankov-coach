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
            <div class="image-container">
              <img :src="transformation.beforeImage" :alt="`${transformation.name} до`" class="before-image" />
              <div class="image-label">ДО</div>
            </div>
            <div class="transformation-arrow">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path d="M30 10L35 5M35 5L30 0M35 5H0" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="image-container">
              <img :src="transformation.afterImage" :alt="`${transformation.name} после`" class="after-image" />
              <div class="image-label after">ПОСЛЕ</div>
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
      
      <div class="transformation-cta fade-in" :class="{ visible: isVisible }">
        <p>Готов стать следующим в этом списке?</p>
        <button class="btn btn-primary" @click="scrollToContact">
          Начать трансформацию
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

const isVisible = ref(false);

// Вычисляемое свойство для показа карточек
const visibleTransformations = computed(() => {
  // Показываем все карточки
  return transformations;
});

interface Transformation {
  name: string;
  beforeImage: string;
  afterImage: string;
  weightLoss: string;
  duration: string;
  description: string;
}

const transformations: Transformation[] = [
  {
    name: 'Анна К.',
    beforeImage: 'https://cdn.mos.cms.futurecdn.net/mgFgzRkXDvXhFMTe3JDULC-1280-80.png',
    afterImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    weightLoss: '-12 кг',
    duration: '4 месяца',
    description: 'Полностью изменила подход к питанию и тренировкам. Теперь чувствует себя увереннее.'
  },
  {
    name: 'Михаил Р.',
    beforeImage: 'https://cdn.mos.cms.futurecdn.net/mgFgzRkXDvXhFMTe3JDULC-1280-80.png',
    afterImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    weightLoss: '-18 кг',
    duration: '6 месяцев',
    description: 'Набрал мышечную массу и избавился от лишнего жира. Кардинально поменял образ жизни.'
  },
  {
    name: 'Елена С.',
    beforeImage: 'https://cdn.mos.cms.futurecdn.net/mgFgzRkXDvXhFMTe3JDULC-1280-80.png',
    afterImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    weightLoss: '-8 кг',
    duration: '3 месяца',
    description: 'Подготовилась к свадьбе и обрела фигуру мечты. Результат превзошел все ожидания.'
  },
  {
    name: 'Дмитрий П.',
    beforeImage: 'https://cdn.mos.cms.futurecdn.net/mgFgzRkXDvXhFMTe3JDULC-1280-80.png',
    afterImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    weightLoss: '-15 кг',
    duration: '5 месяцев',
    description: 'Вернул форму после травмы и стал сильнее, чем когда-либо. Превзошел собственные ожидания.'
  }
];

const scrollToContact = () => {
  const contactElement = document.getElementById('contact');
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const observeSection = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    { threshold: 0.3 }
  );

  const section = document.querySelector('.transformations');
  if (section) observer.observe(section);
};

onMounted(() => {
  setTimeout(() => {
    observeSection();
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-xl);
  gap: var(--space-md);
}

.image-container {
  position: relative;
  flex: 1;
  max-width: 120px;
}

.image-container img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  transition: all var(--transition-smooth);
}

.image-label {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-graphite);
  color: var(--color-white);
  padding: var(--space-xs) var(--space-sm);
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.1em;
}

.image-label.after {
  background: var(--color-accent);
  color: var(--color-graphite);
}

.transformation-arrow {
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 var(--space-sm);
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
.transformation-card:hover .before-image {
  transform: scale(1.05);
  filter: grayscale(0.5);
}

.transformation-card:hover .after-image {
  transform: scale(1.05);
  filter: brightness(1.1);
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
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
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
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
    padding: 0 var(--space-lg);
  }
  
  .transformation-card {
    padding: var(--space-xl);
    border-radius: 16px;
  }
  
  .transformation-images {
    flex-direction: column;
    gap: var(--space-lg);
    margin-bottom: var(--space-lg);
  }
  
  .transformation-arrow {
    transform: rotate(90deg);
    margin: var(--space-sm) 0;
    width: 30px;
    height: 30px;
  }
  
  .image-container {
    max-width: 180px;
    margin: 0 auto;
  }
  
  .client-image {
    border-radius: 12px;
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
}

@media (max-width: 480px) {
  .transformations {
    padding: var(--space-xl) 0;
  }
  
  .transformations-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
    padding: 0 var(--space-md);
  }
  
  .section-header {
    padding: 0 var(--space-md);
    margin-bottom: var(--space-xl);
  }
  
  .section-header h2 {
    font-size: clamp(1.8rem, 10vw, 2.2rem);
  }
  
  .transformations-grid {
    padding: 0 var(--space-md);
    gap: var(--space-lg);
  }
  
  .transformation-card {
    padding: var(--space-lg);
    border-radius: 12px;
  }
  
  .image-container {
    max-width: 150px;
  }
  
  .transformation-info h3 {
    font-size: 1.2rem;
  }
  
  .client-story {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .stat-value {
    font-size: 1.3rem;
  }
  
  .stat-label {
    font-size: 0.85rem;
  }
  
  .transformation-cta {
    margin: 0 var(--space-lg);
    padding: var(--space-xl);
    border-radius: 16px;
  }
  
  .transformation-cta p {
    font-size: 1.1rem;
    margin-bottom: var(--space-md);
    line-height: 1.4;
    padding: 0 var(--space-sm);
  }
  
  .transformation-cta .btn {
    width: 100%;
    max-width: 280px;
    padding: var(--space-md) var(--space-lg);
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .transformation-cta {
    margin: 0 var(--space-md);
    padding: var(--space-lg);
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
  }
}
</style>