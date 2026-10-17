/* ==========================================================
   Amrrit Amberly — Author Website
   Small, dependency-free scripts for navigation, animations
   and the contact form.
   ========================================================== */

// Tell the CSS that JavaScript is running (enables reveal animations).
document.documentElement.classList.add("js");

const CONTACT_EMAIL = "amrritamberly@gmail.com";

/* ---------- Header background on scroll ---------- */
const header = document.querySelector(".site-header");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 40);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

/* ---------- Mobile menu ---------- */
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("nav-menu");

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.classList.toggle("is-open", open);
  document.body.style.overflow = open ? "hidden" : "";
}

toggle.addEventListener("click", () => {
  setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

// Close the menu when a link is chosen or Escape is pressed.
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

/* ---------- Highlight the current section in the menu ---------- */
const navLinks = [...menu.querySelectorAll('a[href^="#"]:not(.nav__cta)')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

/* ---------- Fade-in-on-scroll animation ---------- */
const revealItems = document.querySelectorAll(".reveal");

// Stagger items that sit next to each other so they appear one after another.
revealItems.forEach((item) => {
  const siblings = [...item.parentElement.children].filter((el) => el.classList.contains("reveal"));
  // Capped so long groups (like the book description) don't lag behind the scroll.
  item.style.setProperty("--delay", `${Math.min(siblings.indexOf(item), 3) * 0.12}s`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* ---------- Contact form ---------- */
// There is no server, so the form opens the visitor's email app
// with everything already filled in, addressed to the author.
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = {
    name: form.elements.name,
    email: form.elements.email,
    message: form.elements.message,
  };

  let firstInvalid = null;
  Object.values(fields).forEach((field) => {
    const valid = field.value.trim() !== "" && field.checkValidity();
    field.classList.toggle("is-invalid", !valid);
    field.setAttribute("aria-invalid", String(!valid));
    if (!valid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    statusEl.textContent = "Please add your name, a valid email address and a message.";
    statusEl.classList.add("is-error");
    firstInvalid.focus();
    return;
  }

  const subject = `${form.elements.subject.value} from ${fields.name.value.trim()}`;
  const body =
    `${fields.message.value.trim()}\n\n` +
    `— ${fields.name.value.trim()}\n${fields.email.value.trim()}`;

  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  statusEl.classList.remove("is-error");
  statusEl.textContent =
    `Your email app should now open with your message. If it doesn't, please write directly to ${CONTACT_EMAIL}.`;
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
