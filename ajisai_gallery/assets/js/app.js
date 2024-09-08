const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

new Oreroll("[data-trigger]", { rootMargin: "0px 0px -30%" });
new Oreroll("[data-scrub]", { once: true, scrub: true });

document.addEventListener("DOMContentLoaded", function() {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });

  // .h2 クラスを持つ要素を監視
  document.querySelectorAll('.h2').forEach(element => {
    observer.observe(element);
  });
});
