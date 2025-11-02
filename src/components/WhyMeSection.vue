<template>
  <section class="why-me section">
    <div class="container">
      <div class="section-header fade-in" :class="{ visible: isVisible }">
        <h2>Почему выбирают меня?</h2>
        <p>Что отличает мой подход от других тренеров</p>
      </div>
      
      <div class="advantages-grid grid grid-3">
        <div 
          v-for="(advantage, index) in advantages" 
          :key="index"
          class="advantage-card scale-in"
          :class="{ visible: isVisible }"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div class="advantage-icon">
            <div class="icon-container" v-html="advantage.icon">
            </div>
          </div>
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
          <ul class="advantage-features">
            <li v-for="feature in advantage.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
      
      <!-- Full-width methodology section -->
    </div>
  </section>
  
  <!-- Methodology section with full-width background -->
  <section class="methodology-wrapper">
    <div class="methodology-section fade-in" :class="{ visible: isVisible }">
      <div class="container">
        <div class="methodology-content">
          <div class="methodology-header">
            <div class="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Методология работы</h3>
          </div>
          <p>
            Системный подход к трансформации тела, основанный на научных данных 
            и многолетнем опыте работы с клиентами разного уровня подготовки.
          </p>
          <div class="methodology-steps">
            <div class="step">
              <div class="step-number">01</div>
              <div class="step-content">
                <h4>Анализ и диагностика</h4>
                <p>Полная оценка физического состояния и постановка целей</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">02</div>
              <div class="step-content">
                <h4>Составление программы</h4>
                <p>Индивидуальный план тренировок и питания</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">03</div>
              <div class="step-content">
                <h4>Реализация и контроль</h4>
                <p>Постоянная корректировка и мониторинг прогресса</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isVisible = ref(false);

interface Advantage {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const advantages: Advantage[] = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" fill="currentColor"/>
           </svg>`,
    title: 'Индивидуальность',
    description: 'Каждая программа создается персонально под ваши цели, физические возможности и ограничения.',
    features: [
      'Анализ состава тела',
      'Учет травм и особенностей',
      'Корректировка под результат',
      'Прогрессивная нагрузка'
    ]
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>`,
    title: 'Поддержка 24/7',
    description: 'Я всегда на связи, чтобы ответить на вопросы, мотивировать и корректировать программу.',
    features: [
      'Личный чат в мессенджере',
      'Ответ в течение 2 часов',
      'Видео-разборы техники',
      'Еженедельные созвоны'
    ]
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>`,
    title: 'Результат без компромиссов',
    description: 'Я не буду вас жалеть. Работаем до достижения цели, используя проверенные методики.',
    features: [
      'Научный подход к тренировкам',
      'Прогрессивная периодизация',
      'Контроль каждого движения',
      'Измеримые показатели'
    ]
  }
];

const observeSection = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    { threshold: 0.1 }
  );

  const section = document.querySelector('.why-me');
  if (section) observer.observe(section);
};

onMounted(() => {
  setTimeout(() => {
    observeSection();
  }, 100);
});
</script>

<style scoped>
.why-me {
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
  transition: color var(--transition-fast);
}

.section-header h2:hover {
  color: rgba(255, 255, 255, 1);
}

.section-header p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  transition: color var(--transition-fast);
}

.section-header p:hover {
  color: rgba(255, 255, 255, 0.95);
}

.advantages-grid {
  margin-bottom: var(--space-3xl);
}

.advantage-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(155, 255, 0, 0.2);
  padding: var(--space-2xl);
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
}

.advantage-card.visible {
  opacity: 1;
  transform: scale(1);
}

.advantage-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-alt));
  transform: scaleX(0);
  transition: transform var(--transition-smooth);
}

.advantage-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.advantage-card:hover::before {
  transform: scaleX(1);
}

.advantage-icon {
  margin-bottom: var(--space-lg);
}

.icon-container {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
  transition: all var(--transition-smooth);
  position: relative;
}

.icon-container::after {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, var(--color-accent), var(--color-accent-alt), var(--color-accent));
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity var(--transition-smooth);
}

.advantage-card:hover .icon-container::after {
  opacity: 1;
}

.advantage-card:hover .icon-container {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  border-color: rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 1);
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
}

.advantage-card h3 {
  font-size: 1.4rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--space-md);
  transition: color var(--transition-fast);
}

.advantage-card:hover h3 {
  color: rgba(255, 255, 255, 1);
}

.advantage-card p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
  transition: color var(--transition-fast);
}

.advantage-card:hover p {
  color: rgba(255, 255, 255, 0.95);
}

.advantage-features {
  list-style: none;
  text-align: left;
}

.advantage-features li {
  padding: var(--space-xs) 0;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  padding-left: var(--space-lg);
  transition: color var(--transition-fast);
  display: flex;
  align-items: flex-start;
  word-wrap: break-word;
  line-height: 1.5;
}

.advantage-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color-accent);
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.5;
  flex-shrink: 0;
}

.advantage-card:hover .advantage-features li {
  color: rgba(255, 255, 255, 0.95);
}

/* Methodology wrapper with full-width background */
.methodology-wrapper {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: linear-gradient(135deg, var(--color-black), var(--color-graphite));
  overflow: hidden;
}

.methodology-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(155, 255, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(155, 255, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.methodology-section {
  background: none;
  border-radius: 0;
  padding: var(--space-3xl) 0;
  color: var(--color-white);
  position: relative;
  overflow: visible;
}

.methodology-section::before {
  display: none;
}

.methodology-content {
  position: relative;
  z-index: 2;
}

.methodology-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  color: var(--color-accent);
}

.icon-wrapper svg {
  width: 100%;
  height: 100%;
}

.methodology-section h3 {
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  margin: 0;
  color: var(--color-white);
}

.methodology-section p {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: var(--space-2xl);
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.methodology-steps {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  max-width: 800px;
  margin: 0 auto;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border-radius: 12px;
  border-left: 4px solid var(--color-accent);
  transition: all var(--transition-fast);
}

.step:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
  transform: translateX(8px);
}

.step-number {
  font-size: 1.5rem;
  font-weight: var(--font-weight-extrabold);
  color: var(--color-accent);
  min-width: 40px;
  text-align: center;
  background: rgba(155, 255, 0, 0.1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-content h4 {
  font-size: 1.3rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--space-xs);
}

.step-content p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
}

/* Floating animation for icons */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(2deg);
  }
}

.advantage-card:hover .icon-container {
  animation: float 2s ease-in-out infinite;
}

/* Responsive */
/* Tablet responsive */
@media (max-width: 1024px) and (min-width: 769px) {
  .advantages-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
  }
  
  .advantage-card {
    padding: var(--space-lg);
  }
  
  .advantage-card h3 {
    font-size: 1.2rem;
  }
  
  .advantage-features li {
    font-size: 0.95rem;
    padding-left: var(--space-md);
  }
  
  .advantage-features li::before {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .why-me {
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
  
  .advantages-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
    padding: 0 var(--space-lg);
  }
  
  .advantage-card {
    padding: var(--space-xl);
    border-radius: 16px;
    margin-bottom: var(--space-md);
  }
  
  .advantage-icon {
    margin-bottom: var(--space-lg);
  }
  
  .advantage-card h3 {
    font-size: 1.3rem;
    margin-bottom: var(--space-md);
  }
  
  .advantage-card p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }
  
  .advantage-features {
    gap: var(--space-sm);
    text-align: left;
  }
  
  .advantage-features li {
    font-size: 0.9rem;
    padding: var(--space-xs) 0;
    padding-left: var(--space-md);
    position: relative;
    display: flex;
    align-items: flex-start;
  }
  
  .advantage-features li::before {
    position: absolute;
    left: 0;
    top: 0.1rem;
    font-size: 1rem;
    line-height: 1;
  }
  
  .guarantee-section {
    padding: var(--space-xl);
    margin: 0 var(--space-lg);
  }
  
  .guarantee-stats {
    gap: var(--space-xl);
    flex-direction: column;
    text-align: center;
  }
  
  .methodology-section {
    padding: var(--space-xl);
    margin: 0 var(--space-lg);
  }
  
  .methodology-header h3 {
    font-size: 1.3rem;
  }
  
  .methodology-steps {
    gap: var(--space-lg);
  }
  
  .step {
    flex-direction: column;
    text-align: center;
    gap: var(--space-md);
    padding: var(--space-lg);
  }
  
  .step-number {
    font-size: 1.5rem;
    margin-bottom: var(--space-sm);
  }
  
  .step-content h4 {
    font-size: 1.1rem;
    margin-bottom: var(--space-sm);
  }
  
  .step-content p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .methodology-wrapper {
    margin-left: -50vw;
    margin-right: -50vw;
  }
  
  .methodology-section {
    padding: var(--space-2xl) 0;
  }
}

@media (max-width: 480px) {
  .why-me {
    padding: var(--space-xl) 0;
  }
  
  .section-header {
    margin-bottom: var(--space-xl);
    padding: 0 var(--space-md);
  }
  
  .section-header h2 {
    font-size: clamp(1.8rem, 10vw, 2.2rem);
    line-height: 1.1;
  }
  
  .section-header p {
    font-size: 0.95rem;
  }
  
  .advantages-grid {
    padding: 0 var(--space-md);
    gap: var(--space-md);
  }
  
  .advantage-card {
    padding: var(--space-lg);
    border-radius: 12px;
  }
  
  .advantage-card h3 {
    font-size: 1.2rem;
  }
  
  .advantage-card p {
    font-size: 0.9rem;
  }
  
  .advantage-features li {
    font-size: 0.85rem;
    padding: var(--space-xs) 0;
    padding-left: var(--space-sm);
    position: relative;
    word-wrap: break-word;
    line-height: 1.4;
  }
  
  .advantage-features li::before {
    position: absolute;
    left: 0;
    top: 0.05rem;
    font-size: 0.9rem;
    line-height: 1;
  }
  
  .methodology-section {
    padding: var(--space-lg);
    margin: 0 var(--space-md);
    border-radius: 12px;
  }
  
  .methodology-header {
    flex-direction: column;
    gap: var(--space-sm);
    text-align: center;
  }
  
  .methodology-header h3 {
    font-size: 1.2rem;
  }
  
  .icon-wrapper {
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }
  
  .icon-container {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
  }
  
  .step {
    padding: var(--space-md);
  }
  
  .step-number {
    font-size: 1.3rem;
  }
  
  .step-content h4 {
    font-size: 1rem;
  }
  
  .step-content p {
    font-size: 0.85rem;
  }
  
  .guarantee-section {
    padding: var(--space-lg);
    margin: 0 var(--space-md);
    border-radius: 12px;
  }
  
  .methodology-section {
    padding: var(--space-xl) 0;
  }
}
</style>