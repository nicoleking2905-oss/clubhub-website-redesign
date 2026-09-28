// Sign in page: switches between the sign-in, reset, sent and profile views.
// Prototype only: any email and password "signs in" to the demo profile.
// Replace the submit handlers with the real sign-in and reset endpoints before going live.
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('[data-anim="card"]');
  const views = [...card.querySelectorAll('[data-view]')];
  const view = name => card.querySelector(`[data-view="${name}"]`);
  const signinForm = view('signin');
  const resetForm = view('reset');
  const emailInputs = [signinForm.elements.email, resetForm.elements.resetEmail];
  const passwordInput = signinForm.elements.password;
  const signinError = card.querySelector('[data-error="signin"]');
  const resetError = card.querySelector('[data-error="reset"]');

  const ease = 'cubic-bezier(.2,.7,.2,1)';
  const motionOk = () => !!Element.prototype.animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Load animation: centre circle grows, halfway line sweeps out, card lifts in.
  if (motionOk()) {
    const circle = document.querySelector('[data-anim="circle"]');
    const line = document.querySelector('[data-anim="line"]');
    circle.animate(
      [{ opacity: 0, transform: 'translate(-50%,-50%) scale(.6)' }, { opacity: 1, transform: 'translate(-50%,-50%) scale(1)' }],
      { duration: 700, easing: ease, fill: 'backwards' }
    );
    line.animate(
      [{ transform: 'translateY(-50%) scaleX(0)' }, { transform: 'translateY(-50%) scaleX(1)' }],
      { duration: 700, delay: 100, easing: ease, fill: 'backwards' }
    );
    card.animate(
      [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'none' }],
      { duration: 550, delay: 80, easing: ease, fill: 'backwards' }
    );
  }

  const email = () => emailInputs[0].value;

  // Both forms share one email value, as in the design.
  emailInputs.forEach(input => input.addEventListener('input', () => {
    emailInputs.forEach(other => { if (other !== input) other.value = input.value; });
  }));

  function go(name) {
    views.forEach(v => { v.hidden = v.dataset.view !== name; });
    signinError.hidden = true;
    resetError.hidden = true;
    const current = view(name);
    if (motionOk()) {
      current.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 280, easing: 'ease-out' });
    }
  }

  signinForm.addEventListener('submit', e => {
    e.preventDefault();
    if (email().trim() && passwordInput.value) go('profile');
    else signinError.hidden = false;
  });

  resetForm.addEventListener('submit', e => {
    e.preventDefault();
    if (email().trim()) {
      card.querySelector('[data-sent-email]').textContent = email();
      go('sent');
    } else {
      resetError.hidden = false;
    }
  });

  card.querySelectorAll('[data-go]').forEach(btn => btn.addEventListener('click', () => go(btn.dataset.go)));

  const pwToggle = card.querySelector('[data-action="toggle-pw"]');
  pwToggle.addEventListener('click', () => {
    const show = passwordInput.type === 'password';
    passwordInput.type = show ? 'text' : 'password';
    pwToggle.textContent = show ? 'Hide' : 'Show';
  });

  const stay = card.querySelector('[data-action="toggle-stay"]');
  stay.addEventListener('click', () => {
    stay.setAttribute('aria-checked', String(stay.getAttribute('aria-checked') !== 'true'));
  });

  card.querySelector('[data-action="sign-out"]').addEventListener('click', () => {
    passwordInput.value = '';
    go('signin');
  });
});
