// Create your club: stadium photo zooms out on load and drifts with the mouse on desktop.
// The form only checks both fields are filled in. Connect it to the real sign-up before going live.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.create-form');
  const nameInput = form.elements.clubName;
  const activityInput = form.elements.activity;
  const nameError = form.querySelector('[data-error="clubName"]');
  const activityError = form.querySelector('[data-error="activity"]');
  let tried = false;

  const validate = () => {
    if (!tried) return true;
    nameError.hidden = !!nameInput.value.trim();
    activityError.hidden = !!activityInput.value;
    return nameError.hidden && activityError.hidden;
  };

  nameInput.addEventListener('input', validate);
  activityInput.addEventListener('change', validate);
  form.addEventListener('submit', e => {
    e.preventDefault();
    tried = true;
    validate();
  });

  const hero = document.querySelector('[data-hero]');
  const bg = hero.querySelector('[data-bg]');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  if (bg.animate) {
    bg.animate([{ transform: 'scale(1.08)' }, { transform: 'scale(1)' }], { duration: 1600, easing: 'cubic-bezier(.2,.7,.2,1)' });
  }

  if (!window.matchMedia('(pointer: fine)').matches) return;
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    bg.style.transform = `translate(${(-x * 2.5).toFixed(2)}%, ${(-y * 2.5).toFixed(2)}%)`;
  });
  hero.addEventListener('mouseleave', () => { bg.style.transform = ''; });
});
