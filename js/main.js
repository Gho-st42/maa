// Main JS for navigation, form validation, and dynamic UI

document.addEventListener('DOMContentLoaded', () => {
  // =======================
  // NAV: Toggle mobile menu
  // =======================
  const burger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // =======================
  // NAV: Highlight current page link
  // =======================
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  // =======================
  // FORM: Dynamic "Who did you hear from us?" input display
  // Handles both main and career forms if present
  // =======================
  ['heard', 'heard2'].forEach(id => {
    const select = document.getElementById(id);
    const input = document.getElementById(id === 'heard' ? 'heard-name' : 'heard-name-2');

    if (select && input) {
      select.addEventListener('change', () => {
        if (['client', 'sales'].includes(select.value)) {
          input.style.display = 'block';
          input.required = true;
        } else {
          input.style.display = 'none';
          input.required = false;
        }
      });
    }
  });

  // =======================
  // FORM: Validation (client-side only)
  // =======================
  document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', e => {
      let valid = true;

      form.querySelectorAll('input[required], select[required]').forEach(inp => {
        if (
          !inp.value.trim() ||
          (inp.pattern && !(new RegExp(inp.pattern).test(inp.value.trim())))
        ) {
          valid = false;
        }
      });

      if (!valid) {
        e.preventDefault(); // block invalid forms always
        alert('Please fix form entries!');
        return;
      }
      // No blocking or redirects here — form submits normally
    });
  });
});