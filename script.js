// Edita estos datos para personalizar la web de Constanza: textos, fotos, recuerdos y regalos.
// Las fotos nuevas de la carpeta images/ ya están usadas aquí. Puedes cambiar rutas o añadir más.
const randomNicknames = ["bebé", "mariposita", "amor", "Coni"];

const galleryImages = [
  {
    src: "images/amor 1.jpeg",
    alt: "Momento de amor 1",
    caption: "Una foto de esas que me recuerdan lo bonito que es tenerte cerca."
  },
  {
    src: "images/amor 2.jpeg",
    alt: "Momento de amor 2",
    caption: "Me gusta guardar estos momentos porque en ellos se nota mucho lo nuestro."
  },
  {
    src: "images/amor 4.jpeg",
    alt: "Momento de amor 3",
    caption: "Contigo hasta una foto sencilla termina sintiéndose especial."
  },
  {
    src: "images/amor 5.jpeg",
    alt: "Momento de amor 4",
    caption: "Una pequeña prueba de todas las cosas bonitas que me haces sentir."
  },
  {
    src: "images/amor 6.jpeg",
    alt: "Momento de amor 5",
    caption: "Hay recuerdos que no necesitan mucho ruido para quedarse conmigo."
  },
  {
    src: "images/amor 7.jpeg",
    alt: "Momento de amor 6",
    caption: "Cada imagen contigo tiene algo que me hace sonreír otra vez."
  },
  {
    src: "images/amor 8.jpeg",
    alt: "Momento de amor 7",
    caption: "Otro pedacito de nosotros que quería dejar guardado aquí."
  },
  {
    src: "images/22 mayo.jpeg",
    alt: "22 de mayo 1",
    caption: "22 de mayo: el dia que te pedi salir y todo empezo a sentirse todavia mas nuestro."
  },
  {
    src: "images/22 mayo 2.jpeg",
    alt: "22 de mayo 2",
    caption: "Ese dia guardo un sitio especial porque fue cuando dimos ese paso tan bonito."
  },
  {
    src: "images/22 mayo 3.jpeg",
    alt: "22 de mayo 3",
    caption: "Un recuerdo del 22 de mayo, de esos que se quedan marcados con una sonrisa."
  },
  {
    src: "images/tonto 1.jpeg",
    alt: "Momento tonto juntos",
    caption: "Uno de esos momentos tontos que solo nosotros entendemos y que por eso mismo me encantan."
  },
  {
    src: "images/c4.jpeg",
    alt: "Citroen C4 de su padre",
    caption: "El mitico Citroen C4 de tu padre: feo con ganas, pero ya convertido oficialmente en meme nuestro."
  },
  {
    src: "images/sushi 1.jpeg",
    alt: "Comida juntos 1",
    caption: "Una de nuestras comidas de sushi, de esas que saben a plan bonito contigo."
  },
  {
    src: "images/sushi 2.jpeg",
    alt: "Comida juntos 2",
    caption: "Me encanta que hasta elegir comida contigo se convierta en un recuerdo."
  },
  {
    src: "images/sushi 3.jpeg",
    alt: "Comida juntos 3",
    caption: "Nuestros planes con sushi tienen algo especial: comida rica, risas y nosotros."
  },
  {
    src: "images/sushi 4.jpeg",
    alt: "Comida juntos 4",
    caption: "Otro momento guardado de esos en los que compartir mesa contigo lo mejora todo."
  },
  {
    src: "images/sushi 5.jpeg",
    alt: "Comida juntos 5",
    caption: "Porque nuestras comidas también cuentan una parte muy nuestra de la historia."
  },
  {
    src: "images/sushi 6.jpeg",
    alt: "Comida juntos 6",
    caption: "Comida, charla y tu: una combinación que siempre me deja feliz."
  },
  {
    src: "images/mariposa.jpeg",
    alt: "Mariposita 1",
    caption: "Nuestra mariposita, ese mote cariñoso y un poco tonto que ya se volvió muy nuestro."
  },
  {
    src: "images/mariposa 1.jpeg",
    alt: "Mariposita 2",
    caption: "Porque entre nosotros una mariposita puede significar risa, cariño y complicidad."
  },
  {
    src: "images/mariposa 3.jpeg",
    alt: "Mariposita 3",
    caption: "Un guiño a nuestra forma graciosa de querernos: mariposita incluida."
  }
];

const loveMessages = [
  "{Nickname}, me encanta tu forma de sonreír.",
  "{Nickname}, me haces sentir en casa.",
  "Contigo todo parece mejor.",
  "Gracias por estar en mi vida.",
  "Adoro cómo conviertes lo simple en especial.",
  "Me gusta quién soy cuando estoy contigo.",
  "Tu risa me arregla días enteros.",
  "Este 10 de agosto celebro tu vida y la suerte de tenerte cerca."
];

const interactiveCards = [
  "Un recuerdo: cualquier día contigo, {nickname}, puede terminar siendo mi parte favorita de la semana.",
  "Una promesa: seguir cuidando lo nuestro con calma, ternura y ganas.",
  "Un deseo: vivir muchos 10 de agosto más a tu lado, {nickname}."
];

const playlistSongs = [
  {
    title: "Remix Hesu",
    artist: "Hesu",
    note: "El remix especial para esta playlist, de esos que ya tienen sitio propio en la pagina.",
    src: "audio/peaks/hesu.mpeg",
    theme: "hesu"
  },
  {
    title: "Mi Corazon",
    artist: "Cano",
    note: "Nuestra cancion pendiente ya tiene nombre: esta es la que guardo como una de las nuestras.",
    src: "audio/CANO - MI CORAZÓN (VIDEOCLIP OFICIAL) [kCCOxYEZy5E].mp3",
    theme: "soft-romance"
  },
  {
    title: "La Sacapuntas",
    artist: "La del coche",
    note: "La de cantar en el coche, sin importar afinar demasiado, porque lo importante es reirnos juntos.",
    src: "audio/sacapuntas.mp3",
    theme: "spicy"
  },
  {
    title: "Te Como La Cara",
    artist: "La que me recuerda a ella",
    note: "La que me recuerda a ti, porque tiene algo que me lleva directo a pensarte.",
    src: "audio/te como la cara.mp3",
    theme: "romantic"
  },
  {
    title: "Tormenta de Arena",
    artist: "Dorian",
    note: "La cancion de nuestra peli, esa que ya tiene su propia escena guardada entre nosotros.",
    src: "audio/Dorian - Tormenta de Arena [PTcc1CmEnxw].mp3",
    theme: "movie"
  }
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
  "bebé",
  "mariposita",
  "amor",
  "10 de agosto",
  "Te quiero"
];

const backgroundMusicConfig = {
  src: "audio/creep.mp3",
  volume: 0.28
};

const aiAudioConfig = {
  src: "audio/peaks/ia.ogg",
  startAt: 4,
  volume: 0.86
};

const planOptions = [
  "Peli en casa con manta y palomitas",
  "Paseo sin rumbo y foto bonita de recuerdo",
  "Picnic barato con cosas del súper",
  "Helado y charla en un banco",
  "Noche de nuestra peli con cena improvisada",
  "Ruta para encontrar el mejor croissant",
  "Tarde de mimos y cero planes serios",
  "Cocinar algo nuevo juntos",
  "Atardecer con bebida fría y música",
  "Hacer una lista de sitios a los que queremos ir",
  "Recrear una de nuestras primeras citas",
  "Plan de fotos tontas por la calle"
];

const giftOptions = [
  {
    title: "Tarjeta Inditex 100 euros",
    description: "Una tarjeta regalo de 100 euros para que elijas lo que quieras en Inditex: ropa, accesorios o ese capricho que te apetezca sin pensarlo demasiado.",
    image: "https://raw.githubusercontent.com/ftshector22/coni-pagina-web/main/images/gift-inditex.jpg"
  },
  {
    title: "Entradas para un festival",
    description: "Unas entradas para un festival o concierto que te apetezca, para vivir música, planazo y un recuerdo nuevo juntos.",
    image: "https://raw.githubusercontent.com/ftshector22/coni-pagina-web/main/images/regalo-festival.png"
  },
  {
    title: "Noche en un hotel",
    description: "Una noche en un hotel para desconectar, descansar y hacer un plan diferente juntos, con todo pensado para que sea una escapada bonita.",
    image: "https://raw.githubusercontent.com/ftshector22/coni-pagina-web/main/images/gift-hotel.jpg"
  }
];

const STORAGE_KEY = "birthdayGiftChoiceFestival";
const WEB3FORMS_ACCESS_KEY = "5c6dfbb2-46d4-4f04-84a0-b83a3760fbf7";
const GIFT_NOTIFICATION_EMAIL = "ftshector22@gmail.com";

const intro = document.querySelector("#intro");
const page = document.querySelector("#page");
const hero = document.querySelector("#hero");
const openGiftButton = document.querySelector("#openGiftButton");
const startButton = document.querySelector("#startButton");
const galleryGrid = document.querySelector("#galleryGrid");
const loveGrid = document.querySelector("#loveGrid");
const playlistGrid = document.querySelector("#playlistGrid");
const cardDeck = document.querySelector("#cardDeck");
const heartButton = document.querySelector("#heartButton");
const heartStage = document.querySelector("#heartStage");
const planWheel = document.querySelector("#planWheel");
const spinPlanButton = document.querySelector("#spinPlanButton");
const planResult = document.querySelector("#planResult");
const giftGrid = document.querySelector("#giftGrid");
const giftResult = document.querySelector("#giftResult");
const giftModal = document.querySelector("#giftModal");
const giftModalText = document.querySelector("#giftModalText");
const closeGiftModal = document.querySelector("#closeGiftModal");
const aiAudioButton = document.querySelector("#aiAudioButton");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const closeLightbox = document.querySelector("#closeLightbox");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let heroCelebrationTimer;
let backgroundMusic;
let playlistAudio;
let activePlaylistButton;
let aiAudio;
let shouldResumeBackgroundAfterAi = false;
let backgroundTimeBeforeAi = 0;
let planSpinRotation = 0;
let planHasSpun = false;
const isDesktopViewport = window.matchMedia("(min-width: 981px)").matches;

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function getRandomNickname() {
  return randomNicknames[Math.floor(Math.random() * randomNicknames.length)];
}

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function personalizeText(text) {
  return text
    .replaceAll("{Nickname}", () => capitalizeFirstLetter(getRandomNickname()))
    .replaceAll("{nickname}", getRandomNickname());
}

function applyRandomNicknames() {
  document.title = `Feliz cumpleaños, ${getRandomNickname()}`;

  document.querySelectorAll("[data-random-nickname]").forEach((element) => {
    element.textContent = getRandomNickname();
  });
}

function setupBackgroundMusic() {
  backgroundMusic = new Audio(backgroundMusicConfig.src);
  backgroundMusic.loop = true;
  backgroundMusic.volume = backgroundMusicConfig.volume;
  backgroundMusic.preload = "auto";
}

function setupAiAudio() {
  aiAudio = new Audio(aiAudioConfig.src);
  aiAudio.volume = aiAudioConfig.volume;
  aiAudio.preload = "auto";

  aiAudio.addEventListener("ended", () => {
    aiAudioButton.textContent = "Audio IA";
    aiAudio.currentTime = aiAudioConfig.startAt;
    resumeBackgroundAfterAi();
  });

  aiAudio.addEventListener("error", () => {
    aiAudioButton.textContent = "Audio no disponible";
    resumeBackgroundAfterAi();
  });
}

function playBackgroundMusic() {
  if (!backgroundMusic) return;
  if (aiAudio && !aiAudio.paused) return;
  if (playlistAudio && !playlistAudio.paused) return;

  backgroundMusic.play().catch(() => {
    // Algunos navegadores bloquean el sonido hasta que haya una interacción.
  });
}

function stopBackgroundMusic() {
  if (!backgroundMusic) return;

  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
}

function pauseBackgroundMusic() {
  if (!backgroundMusic) return;

  backgroundMusic.pause();
}

function stopPlaylistAudio() {
  if (!playlistAudio) return;

  playlistAudio.pause();
  playlistAudio.currentTime = 0;

  if (activePlaylistButton) {
    activePlaylistButton.textContent = "Escuchar";
  }
}

function toggleAiAudio() {
  if (!aiAudio) return;

  if (!aiAudio.paused) {
    aiAudio.pause();
    aiAudioButton.textContent = "Audio IA";
    resumeBackgroundAfterAi();
    return;
  }

  shouldResumeBackgroundAfterAi = Boolean(backgroundMusic);
  backgroundTimeBeforeAi = backgroundMusic ? backgroundMusic.currentTime : 0;
  pauseBackgroundMusic();
  stopPlaylistAudio();

  aiAudio.currentTime = aiAudioConfig.startAt;

  aiAudioButton.textContent = "Pausar IA";
  aiAudio.play().catch(() => {
    aiAudioButton.textContent = "Audio no disponible";
    resumeBackgroundAfterAi();
  });
}

function resumeBackgroundAfterAi() {
  if (!shouldResumeBackgroundAfterAi || !backgroundMusic) return;

  shouldResumeBackgroundAfterAi = false;
  if (Number.isFinite(backgroundTimeBeforeAi)) {
    backgroundMusic.currentTime = backgroundTimeBeforeAi;
  }
  backgroundMusic.play().catch(() => {
    // El navegador puede pedir otra interacción para reanudar el audio.
  });
}

function renderGallery() {
  galleryGrid.innerHTML = "";

  galleryImages.forEach((galleryItem, index) => {
    const imageSrc = typeof galleryItem === "string" ? galleryItem : galleryItem.src;
    const imageAlt = typeof galleryItem === "string" ? `Recuerdo ${index + 1}` : galleryItem.alt;
    const caption = typeof galleryItem === "string" ? "" : galleryItem.caption;
    const button = createElement("button", "gallery__button reveal");
    const image = createElement("img");

    button.type = "button";
    button.setAttribute("aria-label", caption || `Abrir foto ${index + 1}`);
    image.src = imageSrc;
    image.alt = imageAlt;

    button.appendChild(image);
    if (caption) {
      const captionElement = createElement("span", "gallery__caption", caption);
      button.appendChild(captionElement);
    }
    button.addEventListener("click", () => openLightbox(imageSrc, caption || image.alt));
    galleryGrid.appendChild(button);
  });
}

function renderLoveMessages() {
  loveGrid.innerHTML = "";

  loveMessages.forEach((message, index) => {
    const card = createElement("article", "love-card reveal");
    const text = createElement("p", "", personalizeText(message));

    card.style.transitionDelay = `${Math.min(index * 55, 330)}ms`;
    card.appendChild(text);
    loveGrid.appendChild(card);
  });
}

function renderPlaylist() {
  playlistGrid.innerHTML = "";

  playlistSongs.forEach((song, index) => {
    const card = createElement("article", `playlist-card playlist-card--${song.theme} reveal`);
    const number = createElement("span", "playlist-card__number", String(index + 1).padStart(2, "0"));
    const content = createElement("div", "playlist-card__content");
    const title = createElement("h3", "", song.title);
    const artist = createElement("p", "playlist-card__artist", song.artist);
    const note = createElement("p", "playlist-card__note", song.note);
    const playButton = createElement("button", "button button--ghost playlist-card__button", "Escuchar");
    const status = createElement("p", "playlist-card__status", "");

    card.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    playButton.type = "button";
    playButton.setAttribute("aria-label", `Escuchar ${song.title}`);
    playButton.addEventListener("click", () => playPlaylistSong(song, playButton, status));

    content.append(title, artist, note, playButton, status);
    card.append(number, content);
    playlistGrid.appendChild(card);
  });
}

function playPlaylistSong(song, button, status) {
  stopBackgroundMusic();
  if (aiAudio && !aiAudio.paused) {
    aiAudio.pause();
    aiAudioButton.textContent = "Audio IA";
    shouldResumeBackgroundAfterAi = false;
  }

  if (playlistAudio && activePlaylistButton === button && !playlistAudio.paused) {
    playlistAudio.pause();
    button.textContent = "Escuchar";
    status.textContent = "Pausada.";
    return;
  }

  if (playlistAudio) {
    playlistAudio.pause();
    playlistAudio.currentTime = 0;
  }

  if (activePlaylistButton && activePlaylistButton !== button) {
    activePlaylistButton.textContent = "Escuchar";
  }

  playlistAudio = new Audio(song.src);
  playlistAudio.volume = 0.82;
  activePlaylistButton = button;
  button.textContent = "Pausar";
  status.textContent = "Sonando ahora.";

  playlistAudio.play().catch(() => {
    button.textContent = "Escuchar";
    status.textContent = "No se pudo reproducir esta cancion.";
  });

  playlistAudio.addEventListener("ended", () => {
    button.textContent = "Escuchar";
    status.textContent = "";
  });

  playlistAudio.addEventListener("error", () => {
    button.textContent = "Escuchar";
    status.textContent = "No se pudo reproducir esta cancion.";
  });
}

function spinPlanWheel() {
  if (planHasSpun) return;

  const selectedPlan = planOptions[Math.floor(Math.random() * planOptions.length)];
  planSpinRotation += 720 + Math.floor(Math.random() * 720);
  planHasSpun = true;

  planWheel.style.transform = `rotate(${planSpinRotation}deg)`;
  spinPlanButton.disabled = true;
  planResult.textContent = "Girando...";

  window.setTimeout(() => {
    planResult.textContent = selectedPlan;
    spinPlanButton.textContent = "Plan elegido";
    sendPlanEmail(selectedPlan);
  }, reducedMotion ? 80 : 850);
}

function renderInteractiveCards() {
  cardDeck.innerHTML = "";

  interactiveCards.forEach((message, index) => {
    const button = createElement("button", "flip-card reveal");
    const inner = createElement("span", "flip-card__inner");
    const front = createElement("span", "flip-card__face flip-card__front");
    const frontMark = createElement("span", "", String(index + 1));
    const back = createElement("span", "flip-card__face flip-card__back");
    const text = createElement("p", "", personalizeText(message));

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
    const article = createElement("article", "gift-card reveal");
    const image = createElement("img");
    const body = createElement("div", "gift-card__body");
    const title = createElement("h3", "", gift.title);
    const description = createElement("p", "gift-card__description", gift.description);
    const chooseButton = createElement("button", "button button--light gift-card__choose", "Elegir este regalo");

    article.tabIndex = 0;
    article.setAttribute("role", "button");
    article.setAttribute("aria-expanded", "false");
    article.setAttribute("aria-label", `Ver detalles de ${gift.title}`);
    image.src = gift.image;
    image.alt = gift.title;
    image.loading = "lazy";
    chooseButton.type = "button";
    chooseButton.disabled = true;

    article.addEventListener("click", () => expandGiftCard(article));
    article.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        expandGiftCard(article);
      }
    });

    chooseButton.addEventListener("click", (event) => {
      event.stopPropagation();
      chooseGift(gift);
    });

    body.append(title, description, chooseButton);
    article.append(image, body);
    giftGrid.appendChild(article);
  });
}

function expandGiftCard(selectedCard) {
  document.querySelectorAll(".gift-card.is-expanded").forEach((card) => {
    if (card !== selectedCard) {
      card.classList.remove("is-expanded");
      card.setAttribute("aria-expanded", "false");
      card.querySelector(".gift-card__choose").disabled = true;
    }
  });

  selectedCard.classList.add("is-expanded");
  selectedCard.setAttribute("aria-expanded", "true");
  selectedCard.querySelector(".gift-card__choose").disabled = false;
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
  const burstAmount = isDesktopViewport ? Math.min(amount, 8) : amount;

  for (let i = 0; i < burstAmount; i += 1) {
    const item = birthdayCelebrationItems[Math.floor(Math.random() * birthdayCelebrationItems.length)];
    const emoji = createElement("span", item.length > 2 ? "hero-emoji hero-emoji--text" : "hero-emoji", item);
    const start = getRandomCelebrationPath();

    emoji.style.setProperty("--start-x", start.x);
    emoji.style.setProperty("--start-y", start.y);
    emoji.style.setProperty("--travel-x", start.travelX);
    emoji.style.setProperty("--travel-y", start.travelY);
    emoji.style.setProperty("--size", item.length > 2 ? `${0.72 + Math.random() * 0.22}rem` : `${1.35 + Math.random() * 1.6}rem`);
    emoji.style.setProperty("--duration", `${isDesktopViewport ? 3600 + Math.random() * 1600 : 5200 + Math.random() * 3600}ms`);
    emoji.style.setProperty("--delay", `${i * 70 + Math.random() * 260}ms`);
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

  launchBirthdayBurst(isDesktopViewport ? 8 : 24);
  if (isDesktopViewport) return;

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

async function chooseGift(gift) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gift));
  showGiftResult(gift);
  giftResult.scrollIntoView({ behavior: "smooth", block: "center" });
  launchSparkles();
  await sendGiftEmail(gift);
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

async function sendGiftEmail(gift) {
  const accessKeyIsMissing = WEB3FORMS_ACCESS_KEY === "TU_ACCESS_KEY_DE_WEB3FORMS";

  if (accessKeyIsMissing) {
    openGiftSentModal(
      "Regalo elegido: " + gift.title + ". Falta poner tu access key de Web3Forms para enviar el correo a " + GIFT_NOTIFICATION_EMAIL + "."
    );
    return;
  }

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: "Coni ha elegido su regalo",
    from_name: "Web regalo Coni",
    email: GIFT_NOTIFICATION_EMAIL,
    message: "Regalo elegido: " + gift.title + "\n\nDescripcion: " + gift.description
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "No se pudo enviar el regalo.");
    }

    openGiftSentModal("Tu eleccion se ha enviado por correo correctamente.");
  } catch {
    openGiftSentModal(
      "Tu regalo queda guardado en la pagina, pero no se pudo enviar el correo. Revisa la access key de Web3Forms."
    );
  }
}

async function sendPlanEmail(plan) {
  const accessKeyIsMissing = WEB3FORMS_ACCESS_KEY === "TU_ACCESS_KEY_DE_WEB3FORMS";

  if (accessKeyIsMissing) {
    openGiftSentModal("Plan elegido: " + plan + ". Falta poner tu access key de Web3Forms.");
    return;
  }

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: "Coni ha girado la ruleta de planes",
    from_name: "Web regalo Coni",
    email: GIFT_NOTIFICATION_EMAIL,
    message: "Plan elegido por la ruleta: " + plan
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "No se pudo enviar el plan.");
    }

    openGiftSentModal("Plan enviado por correo correctamente.");
  } catch {
    openGiftSentModal("El plan queda guardado en la pagina, pero no se pudo enviar el correo.");
  }
}

function openGiftSentModal(message) {
  giftModalText.textContent = message;
  giftModal.classList.add("is-open");
  giftModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeGiftModal.focus();
}

function closeGiftSentModal() {
  giftModal.classList.remove("is-open");
  giftModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
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
  closeGiftModal.addEventListener("click", closeGiftSentModal);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightboxModal();
  });

  giftModal.addEventListener("click", (event) => {
    if (event.target === giftModal) closeGiftSentModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightboxModal();
    }

    if (event.key === "Escape" && giftModal.classList.contains("is-open")) {
      closeGiftSentModal();
    }
  });

  heartButton.addEventListener("click", () => {
    for (let i = 0; i < 10; i += 1) {
      setTimeout(createFloatingHeart, i * 75);
    }
  });

  spinPlanButton.addEventListener("click", spinPlanWheel);
  aiAudioButton.addEventListener("click", toggleAiAudio);
}

function init() {
  applyRandomNicknames();
  setupBackgroundMusic();
  setupAiAudio();
  playBackgroundMusic();
  renderGallery();
  renderLoveMessages();
  renderPlaylist();
  renderInteractiveCards();
  renderGiftOptions();
  localStorage.removeItem(STORAGE_KEY);
  setupRevealAnimations();
  setupEvents();
  document.addEventListener("pointerdown", playBackgroundMusic, { once: true });
}

init();

