<template>
  <section class="stats section section-dark">
    <div class="container">
      <div class="stats-grid grid grid-4">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="stat-item fade-in"
          :class="{ visible: visibleStats[index] }"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div class="stat-number">
            <span ref="numberRefs">{{ animatedNumbers[index] }}</span>
            <span class="stat-suffix">{{ stat.suffix }}</span>
          </div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';

interface Stat {
  number: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { number: 8, suffix: '+', label: 'лет опыта' },
  { number: 250, suffix: '+', label: 'довольных клиентов' },
  { number: 95, suffix: '%', label: 'клиентов достигают цели' },
  { number: 15, suffix: '+', label: 'кг средняя потеря веса' }
];

const visibleStats = ref(Array(stats.length).fill(false));
const animatedNumbers = reactive(Array(stats.length).fill(0));
const numberRefs = ref<HTMLElement[]>([]);

const animateNumber = (finalNumber: number, index: number, duration: number = 2000) => {
  const startTime = Date.now();
  const startNumber = 0;
  
  const updateNumber = () => {
    const now = Date.now();
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    
    animatedNumbers[index] = Math.floor(startNumber + (finalNumber - startNumber) * easedProgress);
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      animatedNumbers[index] = finalNumber;
    }
  };
  
  requestAnimationFrame(updateNumber);
};

const observeStats = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target as Element);
          if (index !== -1 && !visibleStats.value[index]) {
            visibleStats.value[index] = true;
            // Запуск анимации счетчика с задержкой
            setTimeout(() => {
              animateNumber(stats[index].number, index);
            }, index * 100 + 200);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // Наблюдение за каждым элементом статистики
  const statElements = document.querySelectorAll('.stat-item');
  statElements.forEach((el) => observer.observe(el));
};

onMounted(() => {
  setTimeout(() => {
    observeStats();
  }, 100);
});
</script>

<style scoped>
.stats {
  position: relative;
  background: linear-gradient(135deg, var(--color-black) 0%, var(--color-graphite) 100%);
}

.stats::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(155, 255, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(155, 255, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.stats-grid {
  position: relative;
  z-index: 2;
}

.stat-item {
  text-align: center;
  padding: var(--space-xl) var(--space-md);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--transition-smooth);
  cursor: default;
}

.stat-item:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(155, 255, 0, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.stat-number {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-sm);
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
}

.stat-suffix {
  font-size: 0.7em;
  opacity: 0.9;
}

.stat-label {
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.3;
}

/* Pulse animation for numbers */
.stat-number {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    text-shadow: 0 0 5px rgba(155, 255, 0, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(155, 255, 0, 0.6), 0 0 30px rgba(155, 255, 0, 0.4);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
    padding: 0 var(--space-md);
  }
  
  .stat-item {
    padding: var(--space-xl);
  }
}

@media (max-width: 768px) {
  .stats {
    padding: var(--space-2xl) 0;
  }
  
  .stats-grid {
    gap: var(--space-md);
    padding: 0 var(--space-lg);
  }
  
  .stat-item {
    padding: var(--space-lg);
    border-radius: 16px;
  }
  
  .stat-number {
    font-size: clamp(2.5rem, 10vw, 3rem);
    margin-bottom: var(--space-sm);
  }
  
  .stat-suffix {
    font-size: 0.8em;
  }
  
  .stat-label {
    font-size: 1rem;
    line-height: 1.4;
  }
}

@media (max-width: 480px) {
  .stats {
    padding: var(--space-xl) 0;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
    padding: 0 var(--space-md);
  }
  
  .stat-item {
    padding: var(--space-lg) var(--space-md);
    text-align: center;
  }
  
  .stat-number {
    font-size: clamp(2.2rem, 12vw, 2.8rem);
    margin-bottom: var(--space-xs);
  }
  
  .stat-label {
    font-size: 0.95rem;
    line-height: 1.3;
  }
}
</style>