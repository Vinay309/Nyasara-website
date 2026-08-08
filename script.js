const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.site-nav a');

menuToggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

document.getElementById('year').textContent = new Date().getFullYear();

const leadForm = document.getElementById('lead-form');
leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(leadForm).get('name') || 'there';
  const success = leadForm.querySelector('.form-success');
  success.textContent = `Thank you, ${name}. Your Nyasara enquiry is ready to be connected to the live CRM.`;
  leadForm.reset();
});
