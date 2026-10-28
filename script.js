const translations = {
  en: {
    "meta.title": "LapTime — Race the Clock, Own the Track",
    "meta.description":
      "LapTime is the camera-based lap timer for track days and local races. Capture every lap with motion detection, manage races, and run a live leaderboard with Apple TV.",
    "nav.features": "Features",
    "nav.how": "How it works",
    "nav.download": "Download",
    "hero.pill": "Camera-based lap timing",
    "hero.title": "Race the clock.<br />Own the track.",
    "hero.body":
      "LapTime uses camera motion detection to time laps inside a defined frame region. Start a race, set your lap limit, and watch the leaderboard update live.",
    "features.eyebrow": "Built for the pits",
    "features.title": "Everything LapTime ships today",
    "features.card1.title": "Camera lap capture",
    "features.card1.body": "Time laps with motion detection in a defined camera region.",
    "features.card2.title": "Auto start + cooldown",
    "features.card2.body":
      "Race starts on first movement with minimum lap time to reduce false triggers.",
    "features.card3.title": "Race setup",
    "features.card3.body": "Create races with a name, track code, driver, and car.",
    "features.card4.title": "Lap limits",
    "features.card4.body": "Configure a maximum lap count and auto-end the session.",
    "features.card5.title": "Leaderboard + driver detail",
    "features.card5.body":
      "Rank by best lap or total time and inspect every lap per driver.",
    "features.card6.title": "Local network mode",
    "features.card6.body":
      "Keep data local and send laps to Apple TV over peer-to-peer sync.",
    "how.eyebrow": "How it works",
    "how.title": "Three steps to your next lap.",
    "how.step1": "Set up a race with track code, driver, and car.",
    "how.step2": "Point the camera at your timing line and start the session.",
    "how.step3": "Review the leaderboard or send live laps to Apple TV.",
    "how.panel1.title": "Live timing overlay",
    "how.panel1.body":
      "Adaptive overlays keep timing readable as the device rotates.",
    "how.panel2.title": "Sound + diagnostics",
    "how.panel2.body": "Sound cues plus optional detection debug overlays.",
    "cta.title": "Ready to time your next session?",
    "cta.body": "Join the early access lineup and run LapTime at your next event.",
    "cta.primary": "Join the waitlist",
    "cta.meta": "iOS • Apple TV support",
    "footer.tagline": "Precision lap timing. Built for racers.",
    "footer.privacy": "Privacy Policy",
    "footer.imprint": "Imprint",
    "cta.note": "Soon available",
  },
  de: {
    "meta.title": "LapTime — Der Zeit voraus, die Strecke im Griff",
    "meta.description":
      "LapTime ist der kamera-basierte Runden-Timer für Trackdays und lokale Rennen. Erfasse jede Runde per Bewegungserkennung, verwalte Rennen und betreibe ein Live-Leaderboard mit Apple TV.",
    "nav.features": "Features",
    "nav.how": "So funktioniert’s",
    "nav.download": "Download",
    "hero.pill": "Kamera-basiertes Runden-Timing",
    "hero.title": "Jage die Zeit.<br />Hol dir die Strecke.",
    "hero.body":
      "LapTime nutzt Kamera-Bewegungserkennung, um Runden in einem definierten Bildbereich zu messen. Starte ein Rennen, setze dein Rundenlimit und sieh das Live-Leaderboard.",
    "features.eyebrow": "Für die Boxengasse gebaut",
    "features.title": "Alles, was LapTime heute kann",
    "features.card1.title": "Kamera-Rundenerfassung",
    "features.card1.body":
      "Runden per Bewegungserkennung in einem definierten Kamerabereich messen.",
    "features.card2.title": "Auto-Start + Cooldown",
    "features.card2.body":
      "Rennen startet bei erster Bewegung, Mindest-Rundenzeit reduziert Fehltrigger.",
    "features.card3.title": "Rennen einrichten",
    "features.card3.body":
      "Rennen mit Name, Track-Code, Fahrer und Auto anlegen.",
    "features.card4.title": "Rundenlimit",
    "features.card4.body": "Maximale Rundenzahl festlegen und Session automatisch beenden.",
    "features.card5.title": "Leaderboard + Fahreransicht",
    "features.card5.body":
      "Nach Bestzeit oder Gesamtzeit ranken und alle Runden pro Fahrer prüfen.",
    "features.card6.title": "Lokaler Netzwerkmodus",
    "features.card6.body":
      "Daten lokal halten und Runden per Peer-to-Peer an Apple TV senden.",
    "how.eyebrow": "So funktioniert’s",
    "how.title": "Drei Schritte zur nächsten Runde.",
    "how.step1": "Rennen mit Track-Code, Fahrer und Auto einrichten.",
    "how.step2": "Kamera auf die Ziellinie richten und Session starten.",
    "how.step3": "Leaderboard prüfen oder Live-Runden an Apple TV senden.",
    "how.panel1.title": "Live-Timing-Overlay",
    "how.panel1.body":
      "Adaptive Overlays bleiben beim Drehen des Geräts gut lesbar.",
    "how.panel2.title": "Sound + Diagnostik",
    "how.panel2.body": "Sound-Cues plus optionale Debug-Overlays.",
    "cta.title": "Bereit für dein nächstes Timing?",
    "cta.body": "Trag dich für Early Access ein und nutze LapTime beim nächsten Event.",
    "cta.primary": "Zur Warteliste",
    "cta.meta": "iOS • Apple TV Support",
    "footer.tagline": "Präzises Runden-Timing. Für Racer gebaut.",
    "footer.privacy": "Datenschutzerklärung",
    "footer.imprint": "Impressum",
    "cta.note": "Bald verfügbar",
  },
};

const titleEl = document.querySelector("title");
const metaDescription = document.querySelector("meta[name='description']");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const langButtons = document.querySelectorAll(".lang-btn");
const langLinks = document.querySelectorAll(".lang-btn[data-lang]");
const privacyLink = document.querySelector(".privacy-link");
const mdContainers = document.querySelectorAll("[data-md-src]");

const getRelativePrefix = () => {
  const path = window.location.pathname;
  return /\/(en|de)\//.test(path) ? "../" : "";
};

const setLangLinkTargets = () => {
  const path = window.location.pathname;
  const isPrivacyPage =
    path.endsWith("/privacy.html") || path.endsWith("/datenschutz.html");
  const prefix = getRelativePrefix();

  if (isPrivacyPage) {
    langLinks.forEach((link) => {
      const lang = link.dataset.lang;
      const target =
        lang === "de"
          ? `${prefix}de/datenschutz.html`
          : `${prefix}en/privacy.html`;
      link.setAttribute("href", target);
    });
    return;
  }

  langLinks.forEach((link) => {
    const lang = link.dataset.lang;
    link.setAttribute("href", `${prefix}${lang}/`);
  });
};

const setLanguage = (lang) => {
  const dictionary = translations[lang] || translations.en;
  i18nNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = dictionary[key];
    if (!value) {
      return;
    }
    if (node.tagName.toLowerCase() === "title") {
      node.textContent = value;
    } else if (node.tagName.toLowerCase() === "meta") {
      node.setAttribute("content", value);
    } else {
      node.innerHTML = value;
    }
  });

  titleEl.textContent = dictionary["meta.title"];
  metaDescription.setAttribute("content", dictionary["meta.description"]);
  document.documentElement.lang = lang;

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  if (privacyLink) {
    const prefix = getRelativePrefix();
    const target =
      lang === "de"
        ? `${prefix}de/datenschutz.html`
        : `${prefix}en/privacy.html`;
    privacyLink.setAttribute("href", target);
  }
};

langButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    setLanguage(button.dataset.lang);
    localStorage.setItem("laptime-lang", button.dataset.lang);
    window.location.href = button.getAttribute("href");
  });
});

setLangLinkTargets();

const savedLang = localStorage.getItem("laptime-lang");
const pathLang = window.location.pathname.includes("/de/")
  ? "de"
  : window.location.pathname.includes("/en/")
    ? "en"
    : null;

setLanguage(pathLang || savedLang || "en");

mdContainers.forEach(async (container) => {
  const src = container.dataset.mdSrc;
  if (!src) {
    return;
  }
  try {
    const response = await fetch(src);
    if (!response.ok) {
      throw new Error("Failed to load content");
    }
    const content = await response.text();
    container.textContent = content;
  } catch (error) {
    container.textContent = "Content unavailable.";
  }
});

const revealItems = document.querySelectorAll(
  ".section, .hero-copy, .hero-media, .card, .panel-card, .cta-card"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));
