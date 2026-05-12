const content = window.siteContent || {};

const getValue = (source, path) =>
  path.split(".").reduce((value, key) => value && value[key], source);

const setText = (selector, source) => {
  document.querySelectorAll(selector).forEach((element) => {
    const path =
      element.dataset.profile ||
      element.dataset.media ||
      element.dataset.performances ||
      element.dataset.contact;
    const value = getValue(source, path);

    if (value) {
      element.textContent = value;
    }
  });
};

const createElement = (tag, options = {}) => {
  const element = document.createElement(tag);

  if (options.className) element.className = options.className;
  if (options.text) element.textContent = options.text;

  Object.entries(options.attributes || {}).forEach(([name, value]) => {
    if (value) element.setAttribute(name, value);
  });

  return element;
};

const renderHero = () => {
  const profile = content.profile;
  if (!profile) return;

  document.title = profile.title || document.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  const navBrand = document.querySelector(".nav__brand");

  if (metaDescription && profile.metaDescription) {
    metaDescription.setAttribute("content", profile.metaDescription);
  }
  if (navBrand && profile.name) {
    navBrand.setAttribute("aria-label", `${profile.name} home`);
  }

  setText("[data-profile]", profile);

  const heroImage = document.querySelector('[data-profile-image="hero"]');
  if (heroImage && profile.hero) {
    heroImage.src = profile.hero.image;
    heroImage.alt = profile.hero.imageAlt;
  }

  const aboutImage = document.querySelector('[data-profile-image="about"]');
  if (aboutImage && profile.about) {
    aboutImage.src = profile.about.image;
    aboutImage.alt = profile.about.imageAlt;
  }

  const actions = document.querySelector('[data-render="hero-actions"]');
  if (actions && profile.hero?.actions) {
    actions.replaceChildren(
      ...profile.hero.actions.map((action) =>
        createElement("a", {
          className: action.variant === "quiet" ? "button button--quiet" : "button",
          text: action.label,
          attributes: { href: action.href },
        }),
      ),
    );
  }

  const aboutCopy = document.querySelector('[data-render="about-copy"]');
  if (aboutCopy && profile.about?.paragraphs) {
    aboutCopy.replaceChildren(
      ...profile.about.paragraphs.map((paragraph) =>
        createElement("p", { text: paragraph }),
      ),
    );
  }
};

const createCardBody = (item) => {
  const body = createElement("div", { className: "media-card__body" });
  body.append(
    createElement("p", { className: "eyebrow", text: item.eyebrow }),
    createElement("h3", { text: item.title }),
    createElement("p", { text: item.text }),
  );

  if (item.link) {
    body.append(
      createElement("a", {
        className: "text-link",
        text: item.link.label,
        attributes: { href: item.link.href },
      }),
    );
  }

  return body;
};

const renderMedia = () => {
  const media = content.media;
  if (!media) return;

  setText("[data-media]", media);

  const grid = document.querySelector('[data-render="media"]');
  if (!grid) return;

  const cards = media.items.map((item) => {
    const article = createElement("article", {
      className: item.featured
        ? "media-card media-card--wide reveal"
        : "media-card reveal",
    });

    if (item.type === "soundcloud") {
      const embed = createElement("div", { className: "soundcloud-embed" });
      embed.append(
        createElement("iframe", {
          attributes: {
            title: item.embedTitle,
            src: item.embedUrl,
            loading: "lazy",
            allow: "autoplay",
          },
        }),
      );
      article.append(embed);
    } else {
      article.append(
        createElement("img", {
          attributes: { src: item.image, alt: item.imageAlt },
        }),
      );
    }

    article.append(createCardBody(item));
    return article;
  });

  grid.replaceChildren(...cards);
};

const renderPerformances = () => {
  const performances = content.performances;
  if (!performances) return;

  setText("[data-performances]", performances);

  const upcoming = document.querySelector('[data-render="upcoming-events"]');
  if (upcoming) {
    upcoming.replaceChildren(
      ...performances.upcoming.map((event) => {
        const article = createElement("article", {
          className: event.quiet ? "event event--quiet" : "event",
        });
        const details = createElement("div");
        details.append(
          createElement("h4", { text: event.title }),
          createElement("p", { text: event.location }),
        );
        article.append(
          createElement("time", { text: event.date }),
          details,
          createElement("a", {
            text: event.link.label,
            attributes: {
              href: event.link.href,
              "aria-label": `Ask about ${event.title}`,
            },
          }),
        );
        return article;
      }),
    );
  }

  const recent = document.querySelector('[data-render="recent-performances"]');
  if (recent) {
    recent.replaceChildren(
      ...performances.recent.map((event) => {
        const item = createElement("li");
        item.append(createElement("span", { text: event.date }));
        item.append(document.createTextNode(` ${event.text}`));
        return item;
      }),
    );
  }
};

const renderPhotos = () => {
  const photoBand = document.querySelector('[data-render="photo-contexts"]');
  const photos = content.photos?.contexts;
  if (!photoBand || !photos) return;

  photoBand.replaceChildren(
    ...photos.map((photo) => {
      const figure = createElement("figure", { className: "reveal" });
      figure.append(
        createElement("img", {
          attributes: { src: photo.image, alt: photo.alt },
        }),
        createElement("figcaption", { text: photo.caption }),
      );
      return figure;
    }),
  );
};

const renderContact = () => {
  const contact = content.contact;
  if (!contact) return;

  setText("[data-contact]", contact);

  const link = document.querySelector('[data-render="contact-link"]');
  if (link && contact.link) {
    link.textContent = contact.link.label;
    link.href = contact.link.href;
  }
};

const setupNavigation = () => {
  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
};

const setupReveals = () => {
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
};

renderHero();
renderMedia();
renderPerformances();
renderPhotos();
renderContact();
setupNavigation();
setupReveals();
