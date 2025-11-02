<template>
  <section class="faq section section-gray">
    <div class="container">
      <div class="section-header fade-in" :class="{ visible: isVisible }">
        <h2>Часто задаваемые вопросы</h2>
        <p>Ответы на самые популярные вопросы о тренировках</p>
      </div>
      
      <div class="faq-container">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="faq-item fade-in"
          :class="{ visible: isVisible, active: activeIndex === index }"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <button 
            class="faq-question" 
            @click="toggleItem(index)"
            :aria-expanded="activeIndex === index"
          >
            <span class="question-text">{{ item.question }}</span>
            <span class="faq-icon" :class="{ rotated: activeIndex === index }">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
          
          <div class="faq-answer" :class="{ expanded: activeIndex === index }">
            <div class="answer-content">
              <p>{{ item.answer }}</p>
              <ul v-if="item.points" class="answer-points">
                <li v-for="point in item.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="faq-cta fade-in" :class="{ visible: isVisible }">
        <h3>Не нашли ответ на свой вопрос?</h3>
        <p>Свяжитесь со мной напрямую, и я отвечу в течение часа</p>
        <div class="cta-buttons">
          <button class="btn btn-primary" @click="openTelegramChat">
            Задать вопрос
          </button>
          <a href="tel:+79991234567" class="btn btn-secondary">
            Позвонить сейчас
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isVisible = ref(false);
const activeIndex = ref<number | null>(null);

interface FAQItem {
  question: string;
  answer: string;
  points?: string[];
}

const faqItems: FAQItem[] = [
  {
    question: 'Подходят ли тренировки новичкам?',
    answer: 'Абсолютно! Я работаю с людьми любого уровня подготовки. Для новичков я создаю специальные программы с базовыми движениями и постепенным увеличением нагрузки.',
    points: [
      'Изучение правильной техники с первого дня',
      'Постепенное увеличение интенсивности',
      'Объяснение принципов здорового питания',
      'Формирование устойчивых привычек'
    ]
  },
  {
    question: 'Сколько времени нужно для видимых результатов?',
    answer: 'Первые изменения вы заметите уже через 2-3 недели, а заметный результат появится через 6-8 недель при соблюдении всех рекомендаций.',
    points: [
      '1-2 недели: улучшение самочувствия и энергии',
      '3-4 недели: первые визуальные изменения',
      '6-8 недель: значительные улучшения фигуры',
      '3-4 месяца: кардинальная трансформация'
    ]
  },
  {
    question: 'Нужно ли соблюдать строгую диету?',
    answer: 'Никаких строгих диет! Я создаю сбалансированный план питания, который вписывается в ваш образ жизни и учитывает личные предпочтения.',
    points: [
      'Расчет индивидуальной калорийности',
      'Учет пищевых предпочтений и ограничений',
      'Гибкий подход к планированию рациона',
      'Обучение принципам здорового питания'
    ]
  },
  {
    question: 'Можно ли тренироваться дома?',
    answer: 'Конечно! Я составлю эффективную программу для домашних тренировок с минимальным оборудованием или вообще без него.',
    points: [
      'Тренировки с собственным весом',
      'Программы с гантелями и фитнес-резинками',
      'Видео-инструкции по выполнению упражнений',
      'Онлайн-поддержка и корректировки'
    ]
  },
  {
    question: 'Сколько раз в неделю нужно тренироваться?',
    answer: 'Оптимальная частота - 3-4 тренировки в неделю. Это позволяет достичь результата без перетренированности и дает время на восстановление.',
    points: [
      'Новички: 2-3 тренировки в неделю',
      'Средний уровень: 3-4 тренировки в неделю',
      'Продвинутый уровень: 4-5 тренировок в неделю',
      'Обязательные дни отдыха для восстановления'
    ]
  },
  {
    question: 'Что включает в себя сопровождение?',
    answer: 'Полное сопровождение включает персональную программу тренировок, план питания, постоянную связь со мной и регулярные корректировки программы.',
    points: [
      'Индивидуальная программа тренировок',
      'Персональный план питания',
      'Ежедневная поддержка в мессенджере',
      'Еженедельные видео-созвоны',
      'Корректировки программы по результатам',
      'Доступ к базе упражнений и рецептов'
    ]
  }
];

const toggleItem = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const openTelegramChat = () => {
  window.open('https://t.me/Vladislav_Zankov', '_blank', 'noopener,noreferrer');
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

  const section = document.querySelector('.faq');
  if (section) observer.observe(section);
};

onMounted(() => {
  setTimeout(() => {
    observeSection();
  }, 100);
});
</script>

<style scoped>
.faq {
  background: linear-gradient(135deg, var(--color-graphite) 0%, var(--color-black) 100%);
  position: relative;
}

.faq::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 15% 85%, rgba(155, 255, 0, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 85% 15%, rgba(155, 255, 0, 0.05) 0%, transparent 50%);
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

.faq-container {
  max-width: 800px;
  margin: 0 auto var(--space-3xl);
  position: relative;
  z-index: 2;
}

.faq-item {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  margin-bottom: var(--space-lg);
  overflow: hidden;
  transition: all var(--transition-smooth);
  opacity: 0;
  transform: translateY(30px);
}

.faq-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(155, 255, 0, 0.3);
}

.faq-item.active {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(155, 255, 0, 0.5);
}

.faq-question {
  width: 100%;
  padding: var(--space-xl);
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
  transition: all var(--transition-fast);
}

.faq-question:hover {
  background: rgba(255, 255, 255, 0.05);
}

.question-text {
  font-size: 1.2rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  line-height: 1.4;
}

.faq-icon {
  color: var(--color-accent);
  transition: transform var(--transition-smooth);
  flex-shrink: 0;
}

.faq-icon.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-smooth), padding var(--transition-smooth);
}

.faq-answer.expanded {
  max-height: 500px;
}

.answer-content {
  padding: 0 var(--space-xl) var(--space-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.answer-content p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
  font-size: 1.1rem;
}

.answer-points {
  list-style: none;
  margin: 0;
}

.answer-points li {
  color: rgba(255, 255, 255, 0.8);
  padding: var(--space-xs) 0;
  position: relative;
  padding-left: var(--space-lg);
  line-height: 1.6;
}

.answer-points li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

.faq-cta {
  text-align: center;
  padding: var(--space-3xl);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  position: relative;
  z-index: 2;
}

.faq-cta h3 {
  font-size: 1.8rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.faq-cta p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: var(--space-xl);
}

.cta-buttons {
  display: flex;
  gap: var(--space-lg);
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  min-width: 200px;
}

/* Pulse animation for active question */
.faq-item.active .question-text {
  color: var(--color-accent);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .faq-item {
    margin-bottom: var(--space-md);
  }
  
  .faq-question {
    padding: var(--space-lg);
  }
  
  .question-text {
    font-size: 1.1rem;
  }
  
  .answer-content {
    padding: 0 var(--space-lg) var(--space-lg);
  }
  
  .faq-cta {
    padding: var(--space-xl);
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .faq-question {
    padding: var(--space-md);
  }
  
  .question-text {
    font-size: 1rem;
  }
  
  .answer-content {
    padding: 0 var(--space-md) var(--space-md);
  }
  
  .answer-content p {
    font-size: 1rem;
  }
}
</style>