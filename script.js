// script.js — все тексты и данные для лендинга
const siteData = {
  // Общие данные
  owner: {
    name: "Имя Фамилия",
    profession: "Психолог, коуч, специалист по метафорическим и астрологическим инструментам",
    phone: "+7 (999) 000-00-00"
  },

  // Hero секция (первый экран)
  hero: {
    badge: "Коучинг · Психология · Метафора",
    title: "Помогаю обрести ресурс и опору, <br>найти решение и разобраться в себе <br>через эффективные практики и стратегии работы с мышлением",
    subtitle: "Интегративные техники, Игры, МАК, Гипноз и Астросимволизм — подбираю подход под ваш запрос",
    description: "Работаю с тревогой, выгоранием, поиском направления и внутренними барьерами. Использую коучинговый подход и глубинные методы: гипноз, регрессию, метафорические инструменты.",
    ctaMain: "Начать работу",
    ctaSecondary: "Узнать больше"
  },

  // Преимущества (Features)
  features: [
    {
      icon: "🎮",
      title: "Трансформационные и психологические игры",
      text: "Использую игровые форматы как безопасный способ увидеть новые стратегии поведения и протестировать решения без риска."
    },
    {
      icon: "💫",
      title: "Метафорическое пространство и МАК/Таро",
      text: "Работаю через образы и метафоры: МАК-карты и Таро помогают обойти внутреннее сопротивление и быстрее выйти на суть запроса."
    },
    {
      icon: "🌙",
      title: "Астрометафора и астросимволизм",
      text: "Применяю астросимволические образы как метафорический язык: это помогает увидеть паттерны и скрытые мотивы через понятную символику."
    },
    {
      icon: "🧠",
      title: "Гипноз и регрессия",
      text: "При необходимости использую методы гипноза и регрессии для работы с глубинными установками и травматическими сценариями."
    }
  ],

  // Услуги (Services)
  services: [
    {
      title: "Индивидуальная консультация (интегративный формат)",
      duration: "60 минут",
      price: "3 500 ₽",
      description: "Комбинирую коучинг, метафоры и точечные техники под запрос. Подходит, если не знаете, с чего начать."
    },
    {
      title: "Сессия с трансформационной игрой",
      duration: "90 минут",
      price: "4 500 ₽",
      description: "Глубокая проработка темы через игровой сценарий. Идеально для поиска решений и новых стратегий."
    },
    {
      title: "Работа с метафорическими картами (МАК/Таро)",
      duration: "60 минут",
      price: "3 800 ₽",
      description: "Фокус на образах и ассоциациях для быстрого выхода на корень проблемы."
    },
    {
      title: "Пакет из 4 сессий",
      duration: "4 × 60 минут",
      price: "12 000 ₽",
      description: "Системная работа с устойчивым результатом. Включаю разные форматы по плану."
    }
  ],

  // Цены (Pricing)
  pricing: [
    ["Индивидуальная консультация", "60 минут", "5 000 ₽"],
    ["Сессия с игрой в группе", "180 минут", "3 000 ₽"],
    ["Работа с МАК/Таро", "60 минут", "5 000 ₽"],
    ["Работа через Асто-коучинг", "60 минут", "10 000 ₽"],
    ["Пакет из 4 сессий", "4 × 60 минут", "15 000 ₽"]
  ],

  // Как работаем (Process)
  steps: [
    "Заявка на сайте или в Telegram — я связываюсь в течение 24 часов.",
    "Бесплатная 15‑минутная консультация: обсуждаем запрос и подходящий формат (игра, МАК, гипноз и т.д.).",
    "Подписываем договор и выбираем удобный слот в календаре.",
    "Регулярные сессии по плану: раз в неделю или по договорённости.",
    "Промежуточные итоги и корректировка плана каждые 4–6 недель."
  ],

  // Контакты
  contacts: {
    telegram: "https://t.me/kochbiel",
    whatsapp: "https://wa.me/79119110509",
    email: "kochkakat@gmail.com"
  }
};



// ---------------------------------------------------------
// Логика подстановки данных на страницу (автоматически)
// ---------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Hero
  const heroBadgeEl = document.getElementById('hero-badge');          // Используем ID для бейджа — это надёжнее
  const heroTitleEl = document.querySelector('.hero-title');          // Просто .hero-title, без span
  const heroSubtitleEl = document.querySelector('.hero-subtitle');  // Отдельный блок
  const heroDescEl = document.querySelector('.hero-description');     // Отдельный блок
  
  const ctaMainBtn = document.querySelector('.hero-buttons .btn-primary');
  const ctaSecondaryBtn = document.querySelector('.hero-buttons .btn-outline');
  
  // Заполняем тексты
  if (heroBadgeEl) heroBadgeEl.textContent = siteData.hero.badge;
  if (heroTitleEl) heroTitleEl.textContent = siteData.hero.title;
  if (heroSubtitleEl) heroSubtitleEl.textContent = siteData.hero.subtitle;
  if (heroDescEl) heroDescEl.textContent = siteData.hero.description;
  
  // Заполняем кнопки
  if (ctaMainBtn) ctaMainBtn.textContent = siteData.hero.ctaMain;
  if (ctaSecondaryBtn) ctaSecondaryBtn.textContent = siteData.hero.ctaSecondary;
  
  // Features
  const featuresContainer = document.getElementById('features-container');
  if (featuresContainer) {
    const html = siteData.features.map(f => `
      <div class="feature-card">
        <div class="feature-icon">${f.icon}</div>
        <h3 class="feature-title">${f.title}</h3>
        <p class="feature-text">${f.text}</p>
      </div>
    `).join('');
    featuresContainer.innerHTML = html;
  }

  // Services
  const servicesContainer = document.getElementById('services-container');
  if (servicesContainer) {
    const html = siteData.services.map(s => `
      <div class="service-card">
        <h3 class="service-title">${s.title}</h3>
        <p class="service-duration">${s.duration}</p>
        <p class="service-price">${s.price}</p>
        <p class="service-text">${s.description}</p>
      </div>
    `).join('');
    servicesContainer.innerHTML = html;
  }

  // Pricing table
  const pricingBody = document.getElementById('pricing-body');
  if (pricingBody) {
    const html = siteData.pricing.map(row => `
      <tr>
        <td>${row[0]}</td>
        <td>${row[1]}</td>
        <td>${row[2]}</td>
      </tr>
    `).join('');
    pricingBody.innerHTML = html;
  }

  // Process steps
  const stepsContainer = document.getElementById('steps-container');
  if (stepsContainer) {
    const html = siteData.steps.map(step => `<li class="process-step">${step}</li>`).join('');
    stepsContainer.innerHTML = html;
  }

  // Footer year
  const footerYear = document.getElementById('year');
  if (footerYear) footerYear.textContent = new Date().getFullYear();
});
