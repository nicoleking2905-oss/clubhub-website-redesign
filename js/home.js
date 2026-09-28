// Homepage motion: hero phone rises, price sticker pops, screenshots fade up on scroll.
// Headline, price and buttons never wait on any of this. Skipped entirely for reduced motion.
document.addEventListener('DOMContentLoaded', () => {
  if (!Element.prototype.animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const q = name => [...document.querySelectorAll(`[data-anim="${name}"]`)];
  const ease = 'cubic-bezier(.2,.7,.2,1)';

  q('phone').forEach(el => el.animate(
    [{ opacity: 0, transform: 'translateY(32px)' }, { opacity: 1, transform: 'none' }],
    { duration: 700, delay: 150, easing: ease, fill: 'backwards' }
  ));

  q('sticker').forEach(el => el.animate(
    [
      { opacity: 0, transform: 'rotate(10deg) scale(.4)' },
      { opacity: 1, transform: 'rotate(-12deg) scale(1.08)', offset: .65 },
      { opacity: 1, transform: 'rotate(-8deg) scale(1)' }
    ],
    { duration: 650, delay: 600, easing: 'ease-out', fill: 'backwards' }
  ));

  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    e.target.style.opacity = '';
    e.target.animate(
      [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }],
      { duration: 600, easing: ease, fill: 'backwards' }
    );
  }), { threshold: .15 });

  q('reveal').forEach(el => { el.style.opacity = '0'; io.observe(el); });
});
