<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar premium-nav" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="container">
        <div class="nav-content">
          <div class="nav-brand">
            <a href="#hero" @click="scrollTo('hero')" class="brand-link">
              <span class="brand-text">Владислав</span>
              <span class="brand-subtitle">Premium Coach</span>
            </a>
          </div>
          <div class="nav-links" :class="{ 'nav-open': isMobileMenuOpen }">
            <a href="#about" @click="scrollTo('about')" class="nav-link">О методе</a>
            <a href="#transformations" @click="scrollTo('transformations')" class="nav-link">Результаты</a>
            <a href="#services" @click="scrollTo('services')" class="nav-link">Услуги</a>
            <button @click="openTelegramChat" class="nav-link cta-nav-button">Связаться</button>
          </div>
          <button 
            class="mobile-menu-toggle"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :class="{ active: isMobileMenuOpen }"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Fullscreen Mobile Menu -->
    <div class="mobile-menu-overlay" :class="{ active: isMobileMenuOpen }" @click="isMobileMenuOpen = false">
      <div class="mobile-menu-content" @click.stop>
        <div class="mobile-menu-header">
          <div class="mobile-brand">
            <span class="mobile-brand-text">Владислав</span>
            <span class="mobile-brand-subtitle">Premium Coach</span>
          </div>
          <button class="mobile-menu-close" @click="isMobileMenuOpen = false">
            <span class="close-line"></span>
            <span class="close-line"></span>
          </button>
        </div>
        
        <div class="mobile-nav-links">
          <a href="#about" @click="scrollTo('about')" class="mobile-nav-link">
            <span class="link-number">01</span>
            <span class="link-text">О методе</span>
            <span class="link-arrow">→</span>
          </a>
          <a href="#transformations" @click="scrollTo('transformations')" class="mobile-nav-link">
            <span class="link-number">02</span>
            <span class="link-text">Результаты</span>
            <span class="link-arrow">→</span>
          </a>
          <a href="#services" @click="scrollTo('services')" class="mobile-nav-link">
            <span class="link-number">03</span>
            <span class="link-text">Услуги</span>
            <span class="link-arrow">→</span>
          </a>
          <a href="#contact" @click="openTelegramChat" class="mobile-nav-link cta-link">
            <span class="link-number">04</span>
            <span class="link-text">Связаться</span>
            <span class="link-arrow">→</span>
          </a>
        </div>
        
        <div class="mobile-menu-footer">
          <div class="mobile-contact">
            <div class="contact-item">
              <span class="contact-label">Email</span>
              <a href="mailto:info@zankovcoach.ru">info@zankovcoach.ru</a>
            </div>
            <div class="contact-item">
              <span class="contact-label">Телефон</span>
              <a href="tel:+79991234567">+7 (999) 123-45-67</a>
            </div>
          </div>
          <div class="mobile-social">
            <a href="https://instagram.com/zankov_coach" target="_blank" rel="noopener noreferrer" class="mobile-social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                <path d="m16 11.37 0 .63a4 4 0 1 1-1.26-2.74" stroke="currentColor" stroke-width="2" fill="none"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://t.me/Vladislav_Zankov" target="_blank" rel="noopener noreferrer" class="mobile-social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 5L2 12.5l7 1M21 5l-2.5 15L9.5 13.5M21 5L9.5 13.5m0 0V19l3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="hero-wrapper fade-in" :class="{ visible: sectionsVisible.hero }">
      <HeroSection id="hero" @openContactForm="openTelegramChat" />
    </div>

    <!-- Stats Section -->
    <div class="stats-wrapper fade-in" :class="{ visible: sectionsVisible.stats }">
      <StatsSection />
    </div>

    <!-- Transformations Section -->
    <div class="transformations-wrapper fade-in" :class="{ visible: sectionsVisible.transformations }">
      <TransformationsSection id="transformations" />
    </div>

    <!-- Philosophy Section -->
    <section id="about" class="philosophy section">
      <div class="container">
        <div class="philosophy-content grid grid-2">
          <div class="philosophy-video slide-right" :class="{ visible: sectionsVisible.philosophy }">
            <div class="video-container" @click="openVideoModal">
              <video 
                ref="previewVideo"
                autoplay 
                muted 
                loop 
                playsinline
                class="philosophy-video-player"
              >
                <source src="https://royal-gym.ru/upload/iblock/524/6txno8robcynvp8n0ggfz4x4v2abf83w.mp4" type="video/mp4">
                Ваш браузер не поддерживает видео.
              </video>
              <div class="video-overlay">
                <div class="video-play-indicator">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="rgba(155, 255, 0, 0.2)" />
                    <circle cx="40" cy="40" r="30" fill="rgba(155, 255, 0, 0.1)" />
                    <path d="M32 26L56 40L32 54V26Z" fill="var(--accent-color)" />
                  </svg>
                </div>
                <div class="video-caption">
                  <span class="caption-text">Смотреть полное видео</span>
                </div>
              </div>
            </div>
          </div>
          <div class="philosophy-text slide-left" :class="{ visible: sectionsVisible.philosophy }">
            <h2>Моя философия</h2>
            <div class="philosophy-quote">
              <p class="quote-text">
                "Я не даю надежду, я даю <span class="text-accent">результат</span>"
              </p>
            </div>
            <p>
              Ваше тело — это отражение вашей дисциплины. Я не просто провожу тренировки, 
              я изменяю образ жизни. Каждая программа создается индивидуально, 
              основываясь на ваших целях, возможностях и ограничениях.
            </p>
            <p>
              За 7 лет работы я помог более чем 200 клиентам достичь своих целей.
              Если вы ищете легких путей — вам не ко мне. Если готовы работать — добро пожаловать.
            </p>
            <div class="philosophy-principles">
              <div class="principle">
                <span class="principle-number">01</span>
                <span class="principle-text">Индивидуальный подход к каждому клиенту</span>
              </div>
              <div class="principle">
                <span class="principle-number">02</span>
                <span class="principle-text">Научный подход к тренировкам</span>
              </div>
              <div class="principle">
                <span class="principle-number">03</span>
                <span class="principle-text">Постоянная поддержка и мотивация</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Me Section -->
    <div class="why-me-wrapper fade-in" :class="{ visible: sectionsVisible.whyMe }">
      <WhyMeSection />
    </div>

    <!-- Testimonials Section -->
    <div class="testimonials-wrapper fade-in" :class="{ visible: sectionsVisible.testimonials }">
      <TestimonialsSection />
    </div>

    <!-- Services Section -->
    <section id="services" class="services section section-gray">
      <div class="container">
        <div class="section-header fade-in" :class="{ visible: sectionsVisible.services }">
          <h2>Мои услуги</h2>
          <p>Выберите подходящий формат работы</p>
        </div>
        
        <div class="services-grid grid grid-3">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="service-card glass"
            :style="{ transitionDelay: `${index * 0.1}s` }"
            :class="{ visible: sectionsVisible.services }"
          >
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
            <div class="service-price">
              <span class="price">{{ service.price }}</span>
              <span class="price-period">{{ service.period }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <div class="faq-wrapper fade-in" :class="{ visible: sectionsVisible.faq }">
      <FAQSection />
    </div>

    <!-- CTA Section -->
    <section id="contact" class="cta section section-dark">
      <div class="container">
        <div class="cta-content fade-in" :class="{ visible: sectionsVisible.cta }">
          <h2>Готов изменить свое тело?</h2>
          <p>Начни трансформацию уже сегодня</p>
          <div class="cta-buttons">
            <button class="btn btn-primary" @click="openTelegramChat">
              Начать сейчас
            </button>
            <button class="btn btn-secondary" @click="downloadProgram">
              Скачать программу питания
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Footer -->
  <footer class="footer premium-footer">
      <div class="footer-decoration"></div>
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="brand-logo">
              <h3>Владислав Заньков</h3>
              <span class="brand-tagline">Elite Personal Training</span>
            </div>
            <p class="brand-description">
              Трансформируя тела и жизни с 2016 года. 
              Более 500 успешных клиентов доверили мне свои цели.
            </p>
            <div class="certifications">
              <div class="cert-badge">
                <span class="cert-icon">🏆</span>
                <span class="cert-text">Сертифицированный тренер</span>
              </div>
            </div>
          </div>
          
          <div class="footer-services">
            <h4>Программы</h4>
            <ul class="footer-links">
              <li><a href="#services">Персональные тренировки</a></li>
              <li><a href="#services">Онлайн-коучинг</a></li>
              <li><a href="#services">Программы питания</a></li>
              <li><a href="#transformations">Трансформации</a></li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h4>Контакты</h4>
            <div class="contact-info">
              <div class="contact-item">
                <a href="mailto:info@zankovcoach.ru">info@zankovcoach.ru</a>
              </div>
              <div class="contact-item">
                <a href="tel:+79022361129">+7 (902) 236-11-29</a>
              </div>
              <div class="contact-item">
                <span>Московское ш., 17, Самара • БЦ Вертикаль, этаж 3</span>
              </div>
            </div>
          </div>
          
          <div class="footer-social">
            <h4>Следите за результатами</h4>
            <div class="social-links premium-social">
              <a href="https://instagram.com/zankov_coach" target="_blank" rel="noopener noreferrer" class="social-link instagram">
                <span class="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                    <path d="m16 11.37 0 .63a4 4 0 1 1-1.26-2.74" stroke="currentColor" stroke-width="2" fill="none"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                  </svg>
                </span>
                <span class="social-text">@zankov_coach</span>
              </a>
              <a href="https://t.me/Vladislav_Zankov" target="_blank" rel="noopener noreferrer" class="social-link telegram">
                <span class="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 5L2 12.5l7 1M21 5l-2.5 15L9.5 13.5M21 5L9.5 13.5m0 0V19l3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span class="social-text">@Vladislav_Zankov</span>
              </a>
            </div>
            <div class="footer-cta">
              <button class="btn btn-primary footer-btn" @click="openTelegramChat">
                Начать трансформацию
              </button>
            </div>
          </div>
        </div>
      </div>
    
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>&copy; 2025 Владислав Заньков. Все права защищены.</p>
          </div>
          <div class="footer-badge">
            <span class="premium-badge">Premium Coaching Since 2016</span>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Video Modal -->
  <div 
    v-if="isVideoModalOpen" 
    class="video-modal-overlay" 
    @click="closeVideoModal"
  >
    <div class="video-modal" @click.stop>
      <div class="video-modal-header">
        <h3>Мой подход</h3>
        <button class="modal-close-btn" @click="closeVideoModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div class="video-modal-content">
        <video 
          ref="modalVideo"
          controls
          autoplay
          class="modal-video-player"
          @loadedmetadata="onVideoLoaded"
        >
          <source src="https://royal-gym.ru/upload/iblock/524/6txno8robcynvp8n0ggfz4x4v2abf83w.mp4" type="video/mp4">
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import StatsSection from '@/components/StatsSection.vue';
import TransformationsSection from '@/components/TransformationsSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import WhyMeSection from '@/components/WhyMeSection.vue';
import FAQSection from '@/components/FAQSection.vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isVideoModalOpen = ref(false);
const previewVideo = ref(null);
const modalVideo = ref(null);

const sectionsVisible = reactive({
  hero: false,
  stats: false,
  transformations: false,
  philosophy: false,
  whyMe: false,
  testimonials: false,
  services: false,
  faq: false,
  cta: false
});

const services = [
  {
    icon: '💪',
    title: 'Персональные тренировки',
    description: 'Индивидуальные занятия в тренажерном зале с постоянным контролем техники выполнения упражнений',
    features: ['Персональная программа', 'Обучение технике', 'Постановка целей', 'Мотивация и поддержка'],
    price: '5000₽',
    period: 'за тренировку'
  },
  {
    icon: '💻',
    title: 'Онлайн коучинг',
    description: 'Дистанционное ведение с составлением программ тренировок и питания, регулярными проверками',
    features: ['Индивидуальная программа', 'План питания', 'Еженедельные созвоны', 'Поддержка в чате'],
    price: '15000₽',
    period: 'в месяц'
  },
  {
    icon: '🥗',
    title: 'Программы питания',
    description: 'Составление индивидуального плана питания с учетом ваших целей и пищевых предпочтений',
    features: ['Расчет калорий и БЖУ', 'Список продуктов', 'Готовые рецепты', 'Корректировки плана'],
    price: '8000₽',
    period: 'за программу'
  }
];

const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  // Закрываем мобильное меню после клика
  isMobileMenuOpen.value = false;
};

const openTelegramChat = () => {
  window.open('https://t.me/Vladislav_Zankov', '_blank', 'noopener,noreferrer');
};

const downloadProgram = () => {
  // Здесь будет логика скачивания программы
  alert('Скачивание программы питания будет реализовано позже');
};

// Video Modal Functions
const openVideoModal = () => {
  isVideoModalOpen.value = true;
  // Pause preview video when modal opens
  if (previewVideo.value) {
    previewVideo.value.pause();
  }
  // Disable body scroll
  document.body.style.overflow = 'hidden';
};

const closeVideoModal = () => {
  isVideoModalOpen.value = false;
  // Pause modal video
  if (modalVideo.value) {
    modalVideo.value.pause();
  }
  // Resume preview video
  if (previewVideo.value) {
    previewVideo.value.play();
  }
  // Enable body scroll
  document.body.style.overflow = '';
};

const onVideoLoaded = () => {
  // Set video quality or other initial settings
  if (modalVideo.value) {
    modalVideo.value.volume = 0.7; // Set initial volume
  }
};

// Keyboard event handler
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    if (isVideoModalOpen.value) {
      closeVideoModal();
    } else if (isContactFormOpen.value) {
      closeContactForm();
    }
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const observeSections = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Check for ID first, then class
          if (element.id === 'hero' || element.classList.contains('hero-wrapper')) {
            sectionsVisible.hero = true;
          } else if (element.classList.contains('stats-wrapper') || element.classList.contains('stats')) {
            sectionsVisible.stats = true;
          } else if (element.id === 'transformations' || element.classList.contains('transformations-wrapper')) {
            sectionsVisible.transformations = true;
          } else if (element.id === 'about' || element.classList.contains('philosophy')) {
            sectionsVisible.philosophy = true;
          } else if (element.classList.contains('why-me-wrapper') || element.classList.contains('why-me')) {
            sectionsVisible.whyMe = true;
          } else if (element.classList.contains('testimonials-wrapper') || element.classList.contains('testimonials')) {
            sectionsVisible.testimonials = true;
          } else if (element.id === 'services' || element.classList.contains('services')) {
            sectionsVisible.services = true;
          } else if (element.classList.contains('faq-wrapper') || element.classList.contains('faq')) {
            sectionsVisible.faq = true;
          } else if (element.id === 'contact' || element.classList.contains('cta')) {
            sectionsVisible.cta = true;
          }
        }
      });
    },
    { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Наблюдаем за всеми секциями и обёртками
  const elementsToObserve = [
    '.hero-wrapper',
    '.stats-wrapper', 
    '.transformations-wrapper',
    '#about',
    '.why-me-wrapper',
    '.testimonials-wrapper',
    '#services',
    '.faq-wrapper',
    '#contact'
  ];

  elementsToObserve.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) observer.observe(element);
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('keydown', handleKeydown);
  setTimeout(() => {
    observeSections();
  }, 100);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleKeydown);
});

// Отслеживаем изменения состояния мобильного меню
watch(isMobileMenuOpen, (newValue) => {
  if (newValue) {
    // Блокируем скролл страницы
    document.body.style.overflow = 'hidden';
  } else {
    // Разблокируем скролл страницы
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
/* Base responsive rules */
* {
  box-sizing: border-box;
}

img, video {
  max-width: 100%;
  height: auto;
}

.landing-page {
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-md);
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--space-sm);
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  .footer {
    width: 100%;
    overflow-x: hidden;
    padding: var(--space-2xl) 0 0 0;
  }
  
  .footer-content {
    gap: var(--space-xl);
    padding: 0;
    margin-bottom: var(--space-xl);
    text-align: center;
  }
  
  .footer-brand,
  .footer-services,
  .footer-contact,
  .footer-social {
    width: 100%;
    max-width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
  
  .footer-services,
  .footer-contact {
    text-align: center;
  }
  
  .footer-services h4,
  .footer-contact h4,
  .footer-social h4 {
    font-size: 1.1rem;
    margin-bottom: var(--space-md);
  }
  
  .footer-links {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-sm);
    text-align: center;
  }
  
  .footer-links a {
    border-radius: 8px;
    transition: all var(--transition-smooth);
  }
  
  .footer-links a:hover {
    background: rgba(155, 255, 0, 0.1);
    padding-left: var(--space-sm);
  }
  
  .contact-info {
    gap: var(--space-sm);
    align-items: center;
  }
  
  .contact-item {
    font-size: 0.9rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(155, 255, 0, 0.1);
    justify-content: center;
  }
  
  .brand-logo h3 {
    font-size: 1.5rem;
  }
  
  .premium-social {
    flex-direction: column;
    gap: var(--space-sm);
    align-items: center;
  }
  
  .social-link {
    width: 100%;
    max-width: 280px;
    justify-content: center;
    padding: var(--space-md);
    border-radius: 12px;
  }
  
  .footer-cta {
    margin-top: var(--space-lg);
  }
  
  .footer-btn {
    width: 100%;
    max-width: 280px;
    padding: var(--space-md) var(--space-lg);
    font-size: 1rem;
  }
  
  .certifications {
    gap: var(--space-sm);
  }
  
  .cert-badge {
    padding: var(--space-sm) var(--space-md);
    font-size: 0.85rem;
  }
}

/* Global section wrapper styles */
.hero-wrapper,
.stats-wrapper,
.transformations-wrapper,
.why-me-wrapper,
.testimonials-wrapper,
.philosophy,
.faq-wrapper,
.footer {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

/* Philosophy section specific */
.philosophy {
  padding: var(--space-3xl) 0;
  background: linear-gradient(135deg, var(--color-black) 0%, var(--color-graphite) 100%);
  position: relative;
  overflow: hidden;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--space-lg) 0 calc(var(--space-lg) + 10px) 0;
  transition: all var(--transition-smooth);
  background: rgba(17, 17, 17, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(155, 255, 0, 0.1);
  overflow: visible;
}

.premium-nav {
  background: linear-gradient(
    135deg,
    rgba(17, 17, 17, 0.95) 0%,
    rgba(42, 42, 42, 0.9) 50%,
    rgba(17, 17, 17, 0.95) 100%
  );
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(155, 255, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.navbar-scrolled {
  padding: var(--space-md) 0;
  background: linear-gradient(
    135deg,
    rgba(17, 17, 17, 0.98) 0%,
    rgba(42, 42, 42, 0.95) 50%,
    rgba(17, 17, 17, 0.98) 100%
  );
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(155, 255, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
}

.brand-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: all var(--transition-smooth);
}

.brand-link:hover {
  transform: translateY(-2px);
}

.brand-text {
  font-size: 1.8rem;
  font-weight: var(--font-weight-extrabold);
  color: var(--color-white);
  letter-spacing: -0.02em;
  line-height: 1;
  background: linear-gradient(135deg, #FFFFFF 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-subtitle {
  font-size: 0.75rem;
  font-weight: var(--font-weight-medium);
  color: rgba(155, 255, 0, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 2px;
}

.nav-links {
  display: flex;
  gap: var(--space-xl);
  align-items: center;
  flex-wrap: nowrap;
  overflow: visible;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  font-size: 0.95rem;
  transition: all var(--transition-smooth);
  position: relative;
  padding: var(--space-sm) var(--space-md);
  border-radius: 8px;
  letter-spacing: 0.02em;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  transition: all var(--transition-smooth);
  transform: translateX(-50%);
}

.nav-link:hover {
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-1px);
}

.nav-link:hover::before {
  width: 80%;
}

.cta-nav-button {
  background: linear-gradient(135deg, var(--color-accent) 0%, rgba(155, 255, 0, 0.8) 100%);
  color: var(--color-black) !important;
  padding: var(--space-sm) var(--space-lg);
  border-radius: 25px;
  font-weight: var(--font-weight-semibold);
  box-shadow: 
    0 4px 15px rgba(155, 255, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.cta-nav-button::before {
  display: none;
}

.cta-nav-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left var(--transition-smooth);
}

.cta-nav-button:hover {
  background: linear-gradient(135deg, #FFFFFF 0%, var(--color-accent) 100%);
  transform: translateY(-2px);
  box-shadow: 
    0 8px 25px rgba(155, 255, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.cta-nav-button:hover::after {
  left: 100%;
}

.question-nav-button {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  color: var(--color-white) !important;
  border: 1px solid rgba(155, 255, 0, 0.3);
  padding: var(--space-sm) var(--space-lg);
  border-radius: 25px;
  font-weight: var(--font-weight-semibold);
  backdrop-filter: blur(10px);
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.question-nav-button::before {
  display: none;
}

.question-nav-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(155, 255, 0, 0.1), transparent);
  transition: left var(--transition-smooth);
}

.question-nav-button:hover {
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.1) 0%, rgba(155, 255, 0, 0.05) 100%);
  border-color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(155, 255, 0, 0.2);
}

.question-nav-button:hover::after {
  left: 100%;
}

.mobile-menu-toggle {
  display: none; /* Скрываем на десктопе, показываем только на мобильных */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(155, 255, 0, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all var(--transition-smooth);
  position: relative;
  z-index: 10000;
  min-height: 48px;
  min-width: 48px;
}

.mobile-menu-toggle:hover {
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.1), rgba(155, 255, 0, 0.05));
  border-color: rgba(155, 255, 0, 0.4);
  transform: scale(1.05);
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: var(--color-white);
  margin: 2px 0;
  transition: all var(--transition-smooth);
  border-radius: 1px;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
  background: var(--color-accent);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
  background: var(--color-accent);
}

/* Fullscreen Mobile Menu */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.98) 0%,
    rgba(17, 17, 17, 0.95) 50%,
    rgba(10, 10, 10, 0.98) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-smooth);
  overflow: hidden;
}

.mobile-menu-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(155, 255, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(155, 255, 0, 0.05) 0%, transparent 50%);
  animation: menuGlow 8s ease-in-out infinite alternate;
}

@keyframes menuGlow {
  0% { opacity: 0.3; }
  100% { opacity: 0.8; }
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-xl);
  position: relative;
  z-index: 1;
  transform: translateY(50px);
  transition: transform var(--transition-slow);
}

.mobile-menu-overlay.active .mobile-menu-content {
  transform: translateY(0);
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg) 0;
  border-bottom: 1px solid rgba(155, 255, 0, 0.2);
}

.mobile-brand {
  display: flex;
  flex-direction: column;
}

.mobile-brand-text {
  font-size: 2rem;
  font-weight: var(--font-weight-extrabold);
  background: linear-gradient(135deg, #FFFFFF 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.mobile-brand-subtitle {
  font-size: 0.8rem;
  color: rgba(155, 255, 0, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: var(--font-weight-medium);
}

.mobile-menu-close {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(155, 255, 0, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all var(--transition-smooth);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 48px;
  min-width: 48px;
}

.mobile-menu-close:hover {
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.1), rgba(155, 255, 0, 0.05));
  border-color: rgba(155, 255, 0, 0.4);
  transform: rotate(90deg);
}

.close-line {
  position: absolute;
  width: 20px;
  height: 2px;
  background: var(--color-white);
  transition: all var(--transition-smooth);
}

.close-line:nth-child(1) {
  transform: rotate(45deg);
}

.close-line:nth-child(2) {
  transform: rotate(-45deg);
}

.mobile-nav-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-md);
  padding: var(--space-3xl) 0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-xl) var(--space-lg);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  text-decoration: none;
  transition: all var(--transition-smooth);
  backdrop-filter: blur(10px);
  transform: translateX(-20px);
  opacity: 0;
  animation: slideInLink var(--transition-slow) forwards;
  min-height: 60px;
  font-size: 1.1rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-white);
}

.mobile-nav-link:nth-child(1) { animation-delay: 0.1s; }
.mobile-nav-link:nth-child(2) { animation-delay: 0.2s; }
.mobile-nav-link:nth-child(3) { animation-delay: 0.3s; }
.mobile-nav-link:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideInLink {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.mobile-nav-link:hover {
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.1), rgba(155, 255, 0, 0.05));
  border-color: rgba(155, 255, 0, 0.3);
  transform: translateX(10px);
}

.link-number {
  font-size: 0.9rem;
  color: rgba(155, 255, 0, 0.8);
  font-weight: var(--font-weight-bold);
  min-width: 30px;
}

.link-text {
  flex: 1;
  font-size: 1.4rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  margin-left: var(--space-lg);
  text-align: left;
}

.link-arrow {
  font-size: 1.2rem;
  color: rgba(155, 255, 0, 0.6);
  transition: all var(--transition-smooth);
}

.mobile-nav-link:hover .link-arrow {
  color: var(--color-accent);
  transform: translateX(10px);
}

.cta-link {
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.15), rgba(155, 255, 0, 0.08)) !important;
  border-color: rgba(155, 255, 0, 0.3) !important;
}

.cta-link:hover {
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.25), rgba(155, 255, 0, 0.15)) !important;
  border-color: rgba(155, 255, 0, 0.5) !important;
}

.mobile-menu-footer {
  padding: var(--space-xl) 0;
  border-top: 1px solid rgba(155, 255, 0, 0.2);
}

.mobile-contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.mobile-contact .contact-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.contact-label {
  font-size: 0.8rem;
  color: rgba(155, 255, 0, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: var(--font-weight-medium);
}

.mobile-contact a {
  font-size: 1.1rem;
  color: var(--color-white);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-smooth);
}

.mobile-contact a:hover {
  color: var(--color-accent);
}

.mobile-social {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
}

.mobile-social-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-smooth);
  backdrop-filter: blur(10px);
}

.mobile-social-link svg {
  color: rgba(255, 255, 255, 0.8);
  transition: all var(--transition-smooth);
}

.mobile-social-link:hover {
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.1), rgba(155, 255, 0, 0.05));
  border-color: rgba(155, 255, 0, 0.3);
  color: var(--color-white);
  transform: translateY(-2px);
}

.mobile-social-link:hover svg {
  color: var(--color-accent);
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--color-white);
  margin: 3px 0;
  transition: all var(--transition-fast);
}

/* Philosophy Section */
.philosophy {
  padding: var(--space-3xl) 0;
  background: linear-gradient(135deg, var(--color-graphite) 0%, var(--color-black) 100%);
  position: relative;
  color: var(--color-white);
}

.philosophy::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 80% 20%, rgba(155, 255, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(155, 255, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.philosophy-content {
  position: relative;
  z-index: 2;
  align-items: start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: var(--space-sm);
}

.philosophy-video,
.philosophy-text {
  display: flex;
  flex-direction: column;
}

/* Video Styles */
.philosophy-video {
  position: relative;
  border-radius: 16px;
  overflow: visible;
  transition: all var(--transition-smooth);
  margin: var(--space-sm);
}

.philosophy-video:hover {
  transform: scale(1.02);
}

.video-container {
  position: relative;
  width: 100%;
  height: 800px;
  cursor: pointer;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.philosophy-video-player {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: center;
  transition: all var(--transition-smooth);
  border-radius: 16px;
  border: 2px solid rgba(155, 255, 0, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.philosophy-video:hover .philosophy-video-player {
  border-color: rgba(155, 255, 0, 0.4);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(155, 255, 0, 0.05) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all var(--transition-smooth);
  pointer-events: none;
}

.philosophy-video:hover .video-overlay {
  opacity: 1;
}

.video-play-indicator {
  margin-bottom: var(--space-md);
  animation: pulse 2s infinite;
}

.video-play-indicator svg {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.video-caption {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: var(--space-sm) var(--space-md);
  border-radius: 25px;
  border: 1px solid rgba(155, 255, 0, 0.3);
}

.caption-text {
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
}

/* Video Modal Styles */
.video-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg);
  animation: fadeIn 0.3s ease-out;
}

.video-modal {
  background: var(--color-dark);
  border-radius: 20px;
  border: 2px solid rgba(155, 255, 0, 0.3);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 1000px;
  max-height: 95vh;
  overflow: hidden;
  animation: slideUp 0.4s ease-out;
}

.video-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg);
  border-bottom: 1px solid rgba(155, 255, 0, 0.2);
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.1), rgba(0, 0, 0, 0.2));
}

.video-modal-header h3 {
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.modal-close-btn {
  background: rgba(155, 255, 0, 0.1);
  border: 1px solid rgba(155, 255, 0, 0.3);
  border-radius: 8px;
  padding: var(--space-sm);
  color: var(--color-white);
  cursor: pointer;
  transition: all var(--transition-smooth);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close-btn:hover {
  background: rgba(155, 255, 0, 0.2);
  border-color: var(--accent-color);
  transform: scale(1.05);
}

.video-modal-content {
  position: relative;
  background: var(--color-black);
}

.modal-video-player {
  width: 100%;
  height: 75vh;
  min-height: 500px;
  object-fit: contain;
  background: var(--color-black);
}

.video-modal-info {
  padding: var(--space-lg);
  text-align: center;
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.05), rgba(0, 0, 0, 0.1));
}

.video-modal-info p {
  color: var(--color-white);
  margin: 0 0 var(--space-md) 0;
  font-size: 1.1rem;
}

.video-controls-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-sm);
  background: rgba(155, 255, 0, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(155, 255, 0, 0.2);
}

.video-controls-info span {
  color: var(--accent-color);
  font-size: 0.9rem;
  font-weight: 500;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to { 
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.philosophy-text h2 {
  color: var(--color-white);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: var(--space-lg);
  font-weight: 700;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.philosophy-text .philosophy-quote {
  margin: 0 0 var(--space-xl) 0;
  padding: var(--space-lg);
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.15), rgba(155, 255, 0, 0.08));
  border-radius: 20px;
  border: 1px solid rgba(155, 255, 0, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.philosophy-text .philosophy-quote::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
  opacity: 0.6;
}

.philosophy-text .philosophy-quote .quote-text {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: var(--color-white);
  margin: 0;
  line-height: 1.4;
}

.philosophy-text p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.philosophy-principles {
  margin-top: var(--space-xl);
}

.principle {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
  padding: var(--space-md);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border-left: 4px solid var(--color-accent);
  border: 1px solid rgba(155, 255, 0, 0.2);
  transition: all var(--transition-fast);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.principle:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
  transform: translateX(8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 15px rgba(155, 255, 0, 0.2);
  border-color: rgba(155, 255, 0, 0.4);
}

.principle-number {
  font-size: 1.2rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
  min-width: 30px;
  background: rgba(155, 255, 0, 0.1);
  padding: var(--space-xs);
  border-radius: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.principle-text {
  font-weight: var(--font-weight-medium);
  color: var(--color-white);
  font-size: 1rem;
}

/* Services Section */
.services {
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

.services-grid {
  margin-top: var(--space-2xl);
}

.service-card {
  padding: var(--space-xl);
  text-align: center;
  transition: all var(--transition-smooth);
  cursor: default;
  opacity: 0;
  transform: translateY(30px);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(155, 255, 0, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

.service-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  transform: translateY(-10px);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
  border-color: rgba(155, 255, 0, 0.4);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 0 20px rgba(155, 255, 0, 0.2);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: var(--space-lg);
  background: linear-gradient(135deg, var(--color-accent), rgba(155, 255, 0, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 4px rgba(155, 255, 0, 0.3));
}

.service-card h3 {
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.service-card p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--space-lg);
}

.service-features {
  list-style: none;
  margin-bottom: var(--space-xl);
}

.service-features li {
  color: rgba(255, 255, 255, 0.9);
  padding: var(--space-xs) 0;
  position: relative;
  padding-left: var(--space-lg);
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

.service-price {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: var(--space-lg);
}

.price {
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
}

.price-period {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: var(--space-xs);
}

/* CTA Section */
.cta {
  text-align: center;
  background: linear-gradient(135deg, var(--color-black) 0%, var(--color-graphite) 100%);
}

.cta-content h2 {
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.cta-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  margin-bottom: var(--space-2xl);
}

.cta-buttons {
  display: flex;
  gap: var(--space-lg);
  justify-content: center;
  flex-wrap: wrap;
}

/* Footer */
.footer {
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--space-3xl) 0 var(--space-lg);
}

/* Footer */
.footer {
  background: linear-gradient(
    135deg,
    var(--color-black) 0%,
    var(--color-graphite) 30%,
    var(--color-black) 70%,
    #0A0A0A 100%
  );
  color: var(--color-white);
  padding: var(--space-3xl) 0 0 0;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.premium-footer {
  background: linear-gradient(
    135deg,
    #0A0A0A 0%,
    var(--color-black) 20%,
    var(--color-graphite) 50%,
    var(--color-black) 80%,
    #0A0A0A 100%
  );
}

.footer-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--color-accent) 20%,
    rgba(155, 255, 0, 0.8) 50%,
    var(--color-accent) 80%,
    transparent 100%
  );
  box-shadow: 0 0 10px rgba(155, 255, 0, 0.3);
}

.footer-decoration::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(155, 255, 0, 0.1) 0%,
    transparent 70%
  );
  height: 100px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: var(--space-3xl);
  margin-bottom: var(--space-3xl);
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 100%;
}

.footer-brand {
  padding-right: var(--space-xl);
}

.brand-logo h3 {
  color: var(--color-white);
  margin-bottom: var(--space-xs);
  font-size: 2rem;
  font-weight: var(--font-weight-extrabold);
  background: linear-gradient(135deg, #FFFFFF 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.brand-tagline {
  font-size: 0.85rem;
  color: rgba(155, 255, 0, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: var(--font-weight-semibold);
  display: block;
  margin-bottom: var(--space-lg);
}

.brand-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: var(--space-xl);
  font-size: 1rem;
}

.certifications {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.cert-badge {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.1), rgba(155, 255, 0, 0.05));
  border: 1px solid rgba(155, 255, 0, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.cert-icon {
  font-size: 1.2rem;
}

.cert-text {
  font-size: 0.9rem;
  font-weight: var(--font-weight-medium);
  color: rgba(255, 255, 255, 0.9);
}

.footer-services h4,
.footer-contact h4,
.footer-social h4 {
  color: var(--color-white);
  margin-bottom: var(--space-lg);
  font-size: 1.2rem;
  font-weight: var(--font-weight-bold);
  position: relative;
}

.footer-services h4::after,
.footer-contact h4::after,
.footer-social h4::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--color-accent);
  border-radius: 1px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: var(--space-sm);
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all var(--transition-smooth);
  font-weight: var(--font-weight-medium);
  position: relative;
}

.footer-links a::before {
  content: '→';
  position: absolute;
  left: 0;
  opacity: 0;
  transform: translateX(-10px);
  transition: all var(--transition-smooth);
  color: var(--color-accent);
}

.footer-links a:hover {
  color: var(--color-accent);
  padding-left: var(--space-lg);
}

.footer-links a:hover::before {
  opacity: 1;
  transform: translateX(0);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  border-radius: 8px;
  transition: all var(--transition-smooth);
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.contact-icon {
  font-size: 1.1rem;
  width: 24px;
  text-align: center;
}

.contact-item a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color var(--transition-smooth);
  font-weight: var(--font-weight-medium);
}

.contact-item a:hover {
  color: var(--color-accent);
}

.premium-social {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  transition: all var(--transition-smooth);
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: linear-gradient(135deg, rgba(155, 255, 0, 0.1), rgba(155, 255, 0, 0.05));
  border-color: rgba(155, 255, 0, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(155, 255, 0, 0.15);
}

.social-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  transition: all var(--transition-smooth);
}

.social-icon svg {
  width: 100%;
  height: 100%;
  transition: all var(--transition-smooth);
}

.social-link:hover .social-icon {
  color: var(--color-accent);
}

.instagram:hover .social-icon {
  color: var(--color-accent);
}

.telegram:hover .social-icon {
  color: var(--color-accent);
}

.social-text {
  color: rgba(255, 255, 255, 0.8);
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-smooth);
}

.social-link:hover .social-text {
  color: var(--color-white);
}

.footer-cta {
  margin-top: var(--space-lg);
}

.footer-btn {
  width: 100%;
  font-size: 0.95rem;
  padding: var(--space-md) var(--space-lg);
  background: linear-gradient(135deg, var(--color-accent) 0%, rgba(155, 255, 0, 0.8) 100%);
  border: none;
  border-radius: 12px;
  color: var(--color-black);
  font-weight: var(--font-weight-bold);
  transition: all var(--transition-smooth);
  box-shadow: 
    0 4px 15px rgba(155, 255, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.footer-btn:hover {
  background: linear-gradient(135deg, #FFFFFF 0%, var(--color-accent) 100%);
  transform: translateY(-2px);
  box-shadow: 
    0 8px 25px rgba(155, 255, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.footer-bottom {
  border-top: 1px solid rgba(155, 255, 0, 0.2);
  padding: var(--space-xl) 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(17, 17, 17, 0.98) 50%,
    rgba(0, 0, 0, 0.95) 100%
  );
  backdrop-filter: blur(15px);
  position: relative;
}

.footer-bottom::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(155, 255, 0, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(155, 255, 0, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}

.copyright {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.copyright p {
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-size: 0.9rem;
}

.legal-links {
  display: flex;
  gap: var(--space-lg);
}

.legal-links a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color var(--transition-smooth);
}

.legal-links a:hover {
  color: var(--color-accent);
}

.premium-badge {
  background: linear-gradient(135deg, var(--color-accent), rgba(155, 255, 0, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: var(--font-weight-bold);
  font-size: 0.9rem;
  letter-spacing: 0.05em;
}

/* Section Animation Wrappers */
.hero-wrapper,
.stats-wrapper,
.transformations-wrapper,
.why-me-wrapper,
.testimonials-wrapper,
.faq-wrapper {
  opacity: 0;
  transform: translateY(30px);
  transition: all var(--transition-slow);
}

.hero-wrapper {
  padding-top: 120px; /* Отступ для навигации */
}

.hero-wrapper.visible,
.stats-wrapper.visible,
.transformations-wrapper.visible,
.why-me-wrapper.visible,
.testimonials-wrapper.visible,
.faq-wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered animation delays for smoother sequence */
.stats-wrapper {
  transition-delay: 0.1s;
}

.transformations-wrapper {
  transition-delay: 0.2s;
}

.why-me-wrapper {
  transition-delay: 0.1s;
}

.testimonials-wrapper {
  transition-delay: 0.2s;
}

.faq-wrapper {
  transition-delay: 0.1s;
}

/* Desktop/Laptop Responsive */
@media (max-width: 1200px) and (min-width: 1025px) {
  .footer-content {
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
    gap: var(--space-2xl);
  }
  
  .footer-brand {
    padding-right: var(--space-lg);
  }
  
  .brand-description {
    font-size: 0.95rem;
  }
  
  .footer-services h4,
  .footer-contact h4,
  .footer-social h4 {
    font-size: 1.1rem;
  }
  
  .footer-links a,
  .contact-item {
    font-size: 0.9rem;
  }
  
  .social-link {
    font-size: 0.9rem;
    padding: var(--space-sm) var(--space-md);
  }
}

/* Tablet Responsive */
@media (max-width: 1024px) and (min-width: 769px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
    text-align: left;
  }
  
  .footer-brand {
    grid-column: 1 / -1;
    text-align: center;
    padding-right: 0;
    margin-bottom: var(--space-xl);
  }
  
  .footer-services,
  .footer-contact {
    text-align: left;
  }
  
  .footer-social {
    grid-column: 1 / -1;
    text-align: center;
    margin-top: var(--space-lg);
  }
  
  .premium-social {
    justify-content: center;
    gap: var(--space-lg);
  }
  
  .footer-cta {
    text-align: center;
    margin-top: var(--space-lg);
  }
}

@media (max-width: 768px) and (min-width: 481px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
    text-align: left;
  }
  
  .footer-brand {
    grid-column: 1 / -1;
    text-align: center;
    padding-right: 0;
    margin-bottom: var(--space-lg);
  }
  
  .footer-services {
    text-align: left;
  }
  
  .footer-contact {
    text-align: left;
  }
  
  .footer-services h4,
  .footer-contact h4 {
    text-align: left;
    font-size: 1.1rem;
  }
  
  .footer-links {
    align-items: flex-start;
    text-align: left;
  }
  
  .footer-links a {
    text-align: left;
    max-width: none;
  }
  
  .contact-info {
    align-items: flex-start;
    max-width: none;
  }
  
  .contact-item {
    justify-content: flex-start;
    text-align: left;
  }
  
  .footer-social {
    grid-column: 1 / -1;
    text-align: center;
    margin-top: var(--space-md);
  }
  
  .footer-social h4 {
    text-align: center;
  }
  
  .premium-social {
    justify-content: center;
    flex-direction: column;
    gap: var(--space-md);
    align-items: center;
  }
  
  .social-link {
    max-width: 280px;
    width: 100%;
  }
  
  .footer-cta {
    text-align: center;
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .landing-page {
    overflow-x: hidden;
  }
  
  .container {
    width: 100%;
    max-width: 100%;
    padding: 0 var(--space-md);
    overflow-x: hidden;
  }
  
  .hero-wrapper {
    padding-top: 100px; /* Меньший отступ для мобильных */
    width: 100%;
    overflow-x: hidden;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .nav-links {
    display: none; /* Скрываем десктопное меню */
  }
  
  .brand-text {
    font-size: 1.5rem;
  }
  
  .brand-subtitle {
    font-size: 0.7rem;
  }
  
  .mobile-menu-content {
    padding: var(--space-lg);
  }
  
  .mobile-nav-links {
    padding: var(--space-2xl) 0;
  }
  
  .mobile-nav-link {
    padding: var(--space-lg);
  }
  
  .link-text {
    font-size: 1.2rem;
  }
  
  .philosophy {
    padding: var(--space-2xl) 0;
    width: 100%;
    overflow-x: hidden;
  }
  
  .philosophy-content {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
    align-items: normal;
    padding: 0 var(--space-lg);
  }
  
  .philosophy-video,
  .philosophy-text {
    display: block;
    border-radius: 16px;
  }
  
  .philosophy-video {
    order: 1;
    max-height: 400px;
    overflow: hidden;
    margin: 0;
  }
  
  .philosophy-video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
  
  .philosophy-text {
    order: 2;
    padding: var(--space-xl);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    backdrop-filter: blur(15px);
    border: 1px solid rgba(155, 255, 0, 0.2);
  }
  
  .philosophy-text h2 {
    font-size: clamp(1.8rem, 7vw, 2.2rem);
    line-height: 1.2;
    margin-bottom: var(--space-lg);
    text-align: center;
  }
  
  .philosophy-text .philosophy-quote .quote-text {
    font-size: clamp(1rem, 4vw, 1.1rem);
    line-height: 1.6;
    text-align: center;
    margin-bottom: var(--space-lg);
  }
  
  .quote-author {
    text-align: center;
    font-size: 0.9rem;
  }
}

/* Philosophy mobile styles for small screens */
@media (max-width: 480px) {
  .landing-page {
    overflow-x: hidden;
  }
  
  .container {
    width: 100%;
    max-width: 100%;
    padding: 0 var(--space-sm);
    overflow-x: hidden;
  }
  
  .philosophy {
    padding: var(--space-xl) 0;
    width: 100%;
    overflow-x: hidden;
  }
  
  .philosophy-content {
    gap: var(--space-lg);
    padding: 0 var(--space-md);
    width: 100%;
    max-width: 100%;
  }
  
  .philosophy-video {
    max-height: 300px;
    border-radius: 12px;
    margin: 0;
  }
  
  .philosophy-video video {
    border-radius: 12px;
  }
  
  .philosophy-text {
    padding: var(--space-lg);
    border-radius: 12px;
  }
  
  .philosophy-text h2 {
    font-size: clamp(1.6rem, 8vw, 2rem);
    margin-bottom: var(--space-md);
  }
  
  .philosophy-text .philosophy-quote .quote-text {
    font-size: clamp(0.95rem, 4.5vw, 1.05rem);
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }
  
  .quote-author {
    font-size: 0.85rem;
  }
  
  .philosophy-video {
    order: -1;
  }
  
  .video-container {
    height: 320px;
  }
  
  .philosophy-video-player {
    border-radius: 12px;
  }
  
  .video-play-indicator svg {
    width: 40px;
    height: 40px;
  }
  
  /* Video Modal Mobile */
  .video-modal {
    margin: var(--space-md);
    max-height: 95vh;
  }
  
  .video-modal-header {
    padding: var(--space-md);
  }
  
  .video-modal-header h3 {
    font-size: 1.2rem;
  }
  
  .modal-video-player {
    height: 60vh;
    min-height: 350px;
  }
  
  .video-modal-info {
    padding: var(--space-md);
  }
  
  .video-modal-info p {
    font-size: 1rem;
    color: var(--color-white);
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
    text-align: center;
    width: 100%;
    max-width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
  
  .footer-brand {
    padding-right: 0;
    width: 100%;
    max-width: 100%;
  }
  
  .footer-services,
  .footer-contact,
  .footer-social {
    width: 100%;
    max-width: 100%;
  }
  
  .certifications {
    align-items: center;
    width: 100%;
  }
  
  .premium-social {
    align-items: center;
    width: 100%;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: var(--space-lg);
    text-align: center;
    width: 100%;
    max-width: 100%;
  }
  
  .legal-links {
    justify-content: center;
  }
}


.contact-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-smooth);
  padding: var(--space-lg);
}

.contact-modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.contact-modal {
  background: linear-gradient(135deg, var(--color-black), var(--color-graphite));
  border: 1px solid rgba(155, 255, 0, 0.3);
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transform: translateY(50px);
  transition: transform var(--transition-smooth);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.contact-modal-overlay.active .contact-modal {
  transform: translateY(0);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xl) var(--space-xl) var(--space-lg) var(--space-xl);
  border-bottom: 1px solid rgba(155, 255, 0, 0.2);
}

.modal-header h3 {
  color: var(--color-white);
  font-size: 1.8rem;
  font-weight: var(--font-weight-bold);
  margin: 0;
}

.modal-close {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(155, 255, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transition: all var(--transition-smooth);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.modal-close:hover {
  background: rgba(155, 255, 0, 0.1);
  border-color: rgba(155, 255, 0, 0.4);
  transform: rotate(90deg);
}

.close-line {
  position: absolute;
  width: 18px;
  height: 2px;
  background: var(--color-white);
  transition: all var(--transition-smooth);
}

.close-line:nth-child(1) {
  transform: rotate(45deg);
}

.close-line:nth-child(2) {
  transform: rotate(-45deg);
}

.contact-form {
  padding: var(--space-xl);
}

.form-group {
  margin-bottom: var(--space-lg);
}

.form-group label {
  display: block;
  color: var(--color-white);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-sm);
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: var(--space-md);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(155, 255, 0, 0.2);
  border-radius: 10px;
  color: var(--color-white);
  font-size: 1rem;
  transition: all var(--transition-smooth);
  font-family: inherit;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  background: rgba(155, 255, 0, 0.05);
  box-shadow: 0 0 0 3px rgba(155, 255, 0, 0.1);
}

.form-group select {
  cursor: pointer;
}

.form-group select option {
  background: var(--color-black);
  color: var(--color-white);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-actions {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.form-actions .btn {
  flex: 1;
  padding: var(--space-md) var(--space-lg);
  font-size: 1rem;
  min-height: 50px;
}

.form-actions .btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-note {
  margin-top: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid rgba(155, 255, 0, 0.1);
}

.form-note p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  margin: var(--space-xs) 0;
}

/* Mobile styles for contact form */
@media (max-width: 768px) {
  .contact-modal-overlay {
    padding: var(--space-md);
  }
  
  .contact-modal {
    border-radius: 16px;
  }
  
  .modal-header {
    padding: var(--space-lg);
  }
  
  .modal-header h3 {
    font-size: 1.5rem;
  }
  
  .contact-form {
    padding: var(--space-lg);
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .form-actions .btn {
    flex: none;
  }
}

@media (max-width: 480px) {
  .contact-modal-overlay {
    padding: var(--space-sm);
  }
  
  .modal-header {
    padding: var(--space-md);
  }
  
  .modal-header h3 {
    font-size: 1.3rem;
  }
  
  .contact-form {
    padding: var(--space-md);
  }
  
  .modal-close {
    width: 36px;
    height: 36px;
  }
  
  .close-line {
    width: 16px;
  }
}

/* Дополнительные стили для очень маленьких экранов */
@media (max-width: 320px) {
  .container {
    padding: 0 var(--space-xs);
  }
  
  .footer {
    padding: var(--space-xl) 0 0 0;
  }
  
  .footer-content {
    gap: var(--space-lg);
  }
  
  .footer-services h4,
  .footer-contact h4,
  .footer-social h4 {
    font-size: 1rem;
    margin-bottom: var(--space-sm);
  }
  
  .footer-links {
    gap: var(--space-xs);
  }
  
  .footer-links a {
    font-size: 0.85rem;
    max-width: 180px;
  }
  
  .brand-logo h3 {
    font-size: 1.3rem;
  }
  
  .brand-description {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .contact-item {
    font-size: 0.85rem;
    flex-direction: column;
    text-align: center;
    gap: var(--space-xs);
  }
  
  .contact-icon {
    font-size: 1rem;
  }
  
  .cert-badge {
    padding: var(--space-xs);
    flex-direction: column;
    text-align: center;
    gap: var(--space-xs);
    font-size: 0.8rem;
  }
  
  .cert-text {
    font-size: 0.8rem;
  }
  
  .social-link {
    padding: var(--space-sm);
    font-size: 0.85rem;
    max-width: 240px;
  }
  
  .social-text {
    font-size: 0.85rem;
  }
  
  .footer-btn {
    font-size: 0.9rem;
    padding: var(--space-sm) var(--space-md);
    max-width: 240px;
  }
  
  .footer-bottom-content {
    gap: var(--space-md);
  }
  
  .copyright p {
    font-size: 0.8rem;
  }
  
  .premium-badge {
    font-size: 0.75rem;
  }
}
</style>