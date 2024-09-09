const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

new Oreroll("[data-trigger]", { rootMargin: "0px 0px -30%" });
new Oreroll("[data-scrub]", { once: true, scrub: true });
