// Edita estos datos para personalizar la web de Constanza: textos, fotos, recuerdos y regalos.
// Las fotos nuevas de la carpeta images/ ya están usadas aquí. Puedes cambiar rutas o añadir más.
const memories = [
  {
    title: "El día que nos conocimos",
    date: "Uno de nuestros comienzos",
    text: "Coni, desde que llegaste hay algo en mi vida que se siente más bonito, más fácil y más nuestro.",
    image: "images/WhatsApp Image 2026-06-30 at 14.16.45.jpeg"
  },
  {
    title: "Nuestra primera foto",
    date: "Una de esas fotos que dicen mucho",
    text: "Me encanta volver a estas imágenes porque en ellas está esa forma tuya de hacer especial cualquier momento.",
    image: "images/WhatsApp Image 2026-06-30 at 14.17.03.jpeg"
  },
  {
    title: "Uno de mis días favoritos contigo",
    date: "De los que se quedan guardados",
    text: "Ese día confirmé, otra vez, que contigo cualquier plan puede convertirse en recuerdo favorito.",
    image: "images/WhatsApp Image 2026-06-30 at 14.18.45.jpeg"
  },
  {
    title: "Un recuerdo que nunca voy a olvidar",
    date: "Porque contigo todo pesa menos",
    text: "Por cómo reímos, por cómo me miras, por cómo contigo hasta lo simple se siente como casa.",
    image: "images/WhatsApp Image 2026-06-30 at 14.20.21.jpeg"
  }
];

const galleryImages = [
  "images/WhatsApp Image 2026-06-30 at 14.16.45.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.17.03.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.17.08.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.17.25.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.17.43.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.18.10.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.18.45.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.19.13.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.19.51.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.20.21.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.20.25.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.21.03.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.21.44.jpeg",
  "images/WhatsApp Image 2026-06-30 at 14.22.03.jpeg"
];

const loveMessages = [
  "Coni, me encanta tu forma de sonreír.",
  "Constanza, me haces sentir en casa.",
  "Contigo todo parece mejor.",
  "Gracias por estar en mi vida.",
  "Adoro cómo conviertes lo simple en especial.",
  "Me gusta quién soy cuando estoy contigo.",
  "Tu risa me arregla días enteros.",
  "Este 10 de agosto celebro tu vida y la suerte de tenerte cerca."
];

const interactiveCards = [
  "Un recuerdo: cualquier día contigo, Coni, puede terminar siendo mi parte favorita de la semana.",
  "Una promesa: seguir cuidando lo nuestro con calma, ternura y ganas.",
  "Un deseo: vivir muchos 10 de agosto más a tu lado, Constanza."
];

const birthdayCelebrationItems = [
  "💖",
  "❤️",
  "💕",
  "💋",
  "✨",
  "🌟",
  "🎉",
  "🎂",
  "🎁",
  "🥰",
  "Felicidades",
  "Coni",
  "Constanza",
  "10 de agosto",
  "Te quiero"
];

const backgroundMusicConfig = {
  src: "audio/creep.mp3",
  volume: 0.28
};

const giftOptions = [
  {
    title: "Portaventura",
    description: "Un día entero para gritar en las atracciones, reírnos sin parar y volver con otro recuerdo enorme de los dos.",
    image: "images/regalo1.jpg"
  },
  {
    title: "Tarjeta regalo en ropa",
    description: "Una tarjeta para que elijas ropa a tu gusto, sin prisa y con permiso oficial para darte un capricho bonito.",
    image: "images/regalo2.jpg"
  },
  {
    title: "Noche de cine VIP",
    description: "Una noche de peli con palomitas, cena rica y todo preparado para que solo tengas que elegir qué vemos.",
    image: "images/regalo3.jpg"
  }
];

const STORAGE_KEY = "birthdayGiftChoice";

const intro = document.querySelector("#intro");
const page = document.querySelector("#page");
const hero = document.querySelector("#hero");
const openGiftButton = document.querySelector("#openGiftButton");
const startButton = document.querySelector("#startButton");
const timeline = document.querySelector("#timeline");
const galleryGrid = document.querySelector("#galleryGrid");
const loveGrid = document.querySelector("#loveGrid");
const cardDeck = document.querySelector("#cardDeck");
const heartButton = document.querySelector("#heartButton");
const heartStage = document.querySelector("#heartStage");
const giftGrid = document.querySelector("#giftGrid");
const giftResult = document.querySelector("#giftResult");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const closeLightbox = document.querySelector("#closeLightbox");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let heroCelebrationTimer;
let backgroundMusic;

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function setupBackgroundMusic() {
  backgroundMusic = new Audio(backgroundMusicConfig.src);
  backgroundMusic.loop = true;
  backgroundMusic.volume = backgroundMusicConfig.volume;
  backgroundMusic.preload = "auto";
}

function playBackgroundMusic() {
  if (!backgroundMusic) return;

  backgroundMusic.play().catch(() => {
    // Algunos navegadores bloquean el sonido hasta que haya una interacción.
  });
}

function renderMemories() {
  timeline.innerHTML = "";

  memories.forEach((memory) => {
    const article = createElement("article", "memory-card reveal");
    const image = createElement("img", "memory-card__image");
    const content = createElement("div", "memory-card__content");
    const date = createElement("p", "memory-card__date", memory.date);
    const title = createElement("h3", "", memory.title);
    const text = createElement("p", "", memory.text);

    image.src = memory.image;
    image.alt = memory.title;
    image.loading = "lazy";

    content.append(date, title, text);
    article.append(image, content);
    timeline.appendChild(article);
  });
}

function renderGallery() {
  galleryGrid.innerHTML = "";

  galleryImages.forEach((imageSrc, index) => {
    const button = createElement("button", "gallery__button reveal");
    const image = createElement("img");

    button.type = "button";
    button.setAttribute("aria-label", `Abrir foto ${index + 1}`);
    image.src = imageSrc;
    image.alt = `Recuerdo ${index + 1}`;
    image.loading = "lazy";

    button.appendChild(image);
    button.addEventListener("click", () => openLightbox(imageSrc, image.alt));
    galleryGrid.appendChild(button);
  });
}

function renderLoveMessages() {
  loveGrid.innerHTML = "";

  loveMessages.forEach((message, index) => {
    const card = createElement("article", "love-card reveal");
    const text = createElement("p", "", message);

    card.style.transitionDelay = `${Math.min(index * 55, 330)}ms`;
    card.appendChild(text);
    loveGrid.appendChild(card);
  });
}

function renderInteractiveCards() {
  cardDeck.innerHTML = "";

  interactiveCards.forEach((message, index) => {
    const button = createElement("button", "flip-card reveal");
    const inner = createElement("span", "flip-card__inner");
    const front = createElement("span", "flip-card__face flip-card__front");
    const frontMark = createElement("span", "", String(index + 1));
    const back = createElement("span", "flip-card__face flip-card__back");
    const text = createElement("p", "", message);

    button.type = "button";
    button.setAttribute("aria-label", `Carta ${index + 1}`);
    button.style.transitionDelay = `${index * 90}ms`;

    front.appendChild(frontMark);
    back.appendChild(text);
    inner.append(front, back);
    button.appendChild(inner);

    button.addEventListener("click", () => {
      button.classList.toggle("is-flipped");
    });

    cardDeck.appendChild(button);
  });
}

function renderGiftOptions() {
  giftGrid.innerHTML = "";

  giftOptions.forEach((gift) => {
    const article = createElement("button", "gift-card reveal");
    const image = createElement("img");
    const body = createElement("div", "gift-card__body");
    const title = createElement("h3", "", gift.title);

    article.type = "button";
    article.setAttribute("aria-label", `Elegir ${gift.title}`);
    image.src = gift.image;
    image.alt = gift.title;
    image.loading = "lazy";
    article.addEventListener("click", () => chooseGift(gift));

    body.appendChild(title);
    article.append(image, body);
    giftGrid.appendChild(article);
  });
}

function createHeroCelebrationLayer() {
  const layer = createElement("div", "hero__celebration");
  layer.setAttribute("aria-hidden", "true");
  hero.prepend(layer);
  return layer;
}

function launchBirthdayBurst(amount = 18) {
  if (reducedMotion) return;

  const layer = document.querySelector(".hero__celebration") || createHeroCelebrationLayer();

  for (let i = 0; i < amount; i += 1) {
    const item = birthdayCelebrationItems[Math.floor(Math.random() * birthdayCelebrationItems.length)];
    const emoji = createElement("span", item.length > 2 ? "hero-emoji hero-emoji--text" : "hero-emoji", item);
    const start = getRandomCelebrationPath();

    emoji.style.setProperty("--start-x", start.x);
    emoji.style.setProperty("--start-y", start.y);
    emoji.style.setProperty("--travel-x", start.travelX);
    emoji.style.setProperty("--travel-y", start.travelY);
    emoji.style.setProperty("--size", item.length > 2 ? `${0.72 + Math.random() * 0.22}rem` : `${1.35 + Math.random() * 1.6}rem`);
    emoji.style.setProperty("--duration", `${5200 + Math.random() * 3600}ms`);
    emoji.style.setProperty("--delay", `${i * 80 + Math.random() * 520}ms`);
    emoji.style.setProperty("--rotate-start", `${(Math.random() - 0.5) * 24}deg`);
    emoji.style.setProperty("--rotate-end", `${(Math.random() - 0.5) * 70}deg`);

    layer.appendChild(emoji);
    emoji.addEventListener("animationend", () => emoji.remove());
  }
}

function getRandomCelebrationPath() {
  const edge = Math.floor(Math.random() * 4);
  const randomPercent = `${Math.random() * 100}%`;
  const longMove = 96 + Math.random() * 42;
  const sideMove = -34 + Math.random() * 68;

  if (edge === 0) {
    return {
      x: randomPercent,
      y: "-12vh",
      travelX: `${sideMove}vw`,
      travelY: `${longMove}vh`
    };
  }

  if (edge === 1) {
    return {
      x: randomPercent,
      y: "104vh",
      travelX: `${sideMove}vw`,
      travelY: `-${longMove}vh`
    };
  }

  if (edge === 2) {
    return {
      x: "-16vw",
      y: randomPercent,
      travelX: `${longMove}vw`,
      travelY: `${sideMove}vh`
    };
  }

  return {
    x: "104vw",
    y: randomPercent,
    travelX: `-${longMove}vw`,
    travelY: `${sideMove}vh`
  };
}

function startHeroCelebration() {
  if (reducedMotion || heroCelebrationTimer) return;

  launchBirthdayBurst(24);
  heroCelebrationTimer = window.setInterval(() => {
    const heroBounds = hero.getBoundingClientRect();
    const heroIsVisible = heroBounds.bottom > 0 && heroBounds.top < window.innerHeight;
    if (heroIsVisible) launchBirthdayBurst(8);
  }, 3600);
}

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightboxModal() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function chooseGift(gift) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gift));
  showGiftResult(gift);
  giftResult.scrollIntoView({ behavior: "smooth", block: "center" });
  launchSparkles();
}

function showGiftResult(gift) {
  giftResult.hidden = false;
  giftGrid.hidden = true;
  giftResult.innerHTML = "";

  const image = createElement("img", "gift-result__image");
  const content = createElement("div", "gift-result__content");
  const eyebrow = createElement("p", "gift-result__eyebrow", "Regalo elegido");
  const title = createElement("h3", "", gift.title);
  const text = createElement("p", "", gift.description);
  const closing = createElement(
    "p",
    "gift-result__closing",
    "Solo puedes elegir un regalo, así que este queda guardado. Ahora me toca a mí prepararlo para ti."
  );
  const resetButton = createElement("button", "button button--light", "Volver a ver las opciones");

  image.src = gift.image;
  image.alt = gift.title;
  resetButton.type = "button";
  resetButton.addEventListener("click", resetGiftChoice);

  content.append(eyebrow, title, text, closing, resetButton);
  giftResult.append(image, content);
}

function resetGiftChoice() {
  localStorage.removeItem(STORAGE_KEY);
  giftResult.hidden = true;
  giftGrid.hidden = false;
  giftResult.innerHTML = "";
  giftGrid.scrollIntoView({ behavior: "smooth", block: "start" });
}

function restoreGiftChoice() {
  const savedGift = localStorage.getItem(STORAGE_KEY);
  if (!savedGift) return;

  try {
    const parsedGift = JSON.parse(savedGift);
    const currentGift = giftOptions.find((gift) => gift.title === parsedGift.title);

    if (!currentGift) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }

    showGiftResult(currentGift);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function launchSparkles() {
  for (let i = 0; i < 26; i += 1) {
    const spark = createElement("span", "gift-result__spark");
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.top = `${Math.random() * 100}%`;
    spark.style.setProperty("--dx", `${(Math.random() - 0.5) * 220}px`);
    spark.style.setProperty("--dy", `${(Math.random() - 0.5) * 180}px`);
    giftResult.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove());
  }
}

function createFloatingHeart() {
  const heart = createElement("span", "floating-heart", "♥");
  heart.style.setProperty("--x", `${16 + Math.random() * 68}%`);
  heart.style.setProperty("--size", `${18 + Math.random() * 22}px`);
  heartStage.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -60px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupEvents() {
  openGiftButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
    openGiftButton.disabled = true;
    intro.classList.add("is-opening");
    page.classList.remove("is-locked");

    window.setTimeout(() => {
      intro.classList.add("is-hidden");
    }, 1050);

    window.setTimeout(startHeroCelebration, 520);
    playBackgroundMusic();
  });

  startButton.addEventListener("click", () => {
    document.querySelector("#welcome").scrollIntoView({ behavior: "smooth" });
  });

  closeLightbox.addEventListener("click", closeLightboxModal);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightboxModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightboxModal();
    }
  });

  heartButton.addEventListener("click", () => {
    for (let i = 0; i < 10; i += 1) {
      setTimeout(createFloatingHeart, i * 75);
    }
  });
}

function init() {
  setupBackgroundMusic();
  playBackgroundMusic();
  renderMemories();
  renderGallery();
  renderLoveMessages();
  renderInteractiveCards();
  renderGiftOptions();
  restoreGiftChoice();
  setupRevealAnimations();
  setupEvents();
  document.addEventListener("pointerdown", playBackgroundMusic, { once: true });
}

init();
