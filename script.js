const yearSlot = document.querySelector("#year");
const revealTargets = document.querySelectorAll(
  ".masthead-inner, .section-card, .event-card, .research-card, .news-panel, .news-card, .site-footer"
);

if (yearSlot) {
  yearSlot.textContent = new Date().getFullYear();
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
