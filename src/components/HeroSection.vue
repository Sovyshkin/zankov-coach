<template>
  <section class="hero">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
      <div class="container">
        <div class="hero-layout">
          <!-- Левая колонка - Портрет тренера -->
          <div class="hero-portrait slide-right" :class="{ visible: isVisible }">
            <div class="portrait-container">
              <img 
                src="../assets/zankov-coach.webp" 
                alt="Владислав Заньков - персональный фитнес-тренер в Самаре, онлайн коучинг, трансформация тела"
                class="trainer-photo"
                @error="handleImageError"
              />
              <div class="portrait-frame"></div>
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
                  Более 7 лет опыта в фитнес-индустрии. Помог более чем 200 клиентам 
                  достичь желаемых результатов. Специализируюсь на трансформации тела, 
                  силовых тренировках и функциональном фитнесе.
                </p>
                
              </div>
            </div>
            
            <div class="hero-cta slide-left" :class="{ visible: isVisible }">
              <button class="btn btn-primary" @click="$emit('openContactForm')">
                Записаться на пробную тренировку
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
import { onMounted, ref } from 'vue';

// Define emits
const emit = defineEmits<{
  openContactForm: []
}>();

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});

const scrollToContact = () => {
  // Плавный скролл к форме контактов
  const contactElement = document.getElementById('contact');
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleImageError = (event: Event) => {
  // Если изображение не загрузилось, показываем placeholder
  const img = event.target as HTMLImageElement;
  img.src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';
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
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 0 3px rgba(155, 255, 0, 0.3);
  transition: all var(--transition-smooth);
  filter: grayscale(0.1) contrast(1.1) brightness(1.05);
}

.trainer-photo:hover {
  transform: scale(1.02);
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.5),
    0 0 0 3px rgba(155, 255, 0, 0.5),
    0 0 20px rgba(155, 255, 0, 0.2);
}

.portrait-frame {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 2px solid rgba(155, 255, 0, 0.2);
  border-radius: 25px;
  background: linear-gradient(45deg, 
    rgba(155, 255, 0, 0.1) 0%, 
    transparent 50%, 
    rgba(155, 255, 0, 0.1) 100%);
  pointer-events: none;
}

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
  margin-bottom: var(--space-xl);
}

.achievements {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.achievement-item {
  text-align: center;
  padding: var(--space-md);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(155, 255, 0, 0.2);
  transition: all var(--transition-fast);
}

.achievement-item:hover {
  transform: translateY(-5px);
  border-color: rgba(155, 255, 0, 0.4);
  box-shadow: 0 10px 30px rgba(155, 255, 0, 0.2);
}

.achievement-number {
  display: block;
  font-size: 2.5rem;
  font-weight: var(--font-weight-extrabold);
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-xs);
}

.achievement-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
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
  
  .portrait-container {
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
    text-align: center;
  }
  
  .hero-portrait {
    order: 1;
    align-self: center;
  }
  
  .hero-info {
    order: 2;
    max-width: 100%;
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
    margin-bottom: var(--space-xl);
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
  }
  
  .achievements {
    grid-template-columns: 1fr;
    gap: var(--space-md);
    margin-top: var(--space-xl);
  }
  
  .achievement {
    padding: var(--space-lg);
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 70px 0 var(--space-lg) 0;
  }
  
  .hero-layout {
    gap: var(--space-xl);
    padding: 0 var(--space-md);
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
  }
  
  .achievement {
    padding: var(--space-md);
  }
  
  .achievement h3 {
    font-size: 1.5rem;
  }
  
  .achievement p {
    font-size: 0.9rem;
  }
  
  .trainer-intro {
    margin-bottom: var(--space-lg);
  }
  
  .trainer-description {
    margin-bottom: var(--space-lg);
  }
}
</style>