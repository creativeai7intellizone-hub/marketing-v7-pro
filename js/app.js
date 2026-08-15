/* ══════════════════════════════════════
   KaiumMarketing V7 PRO — App JS
   ══════════════════════════════════════ */

/* ── Theme ── */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('km-theme');
if (savedTheme === 'light') root.classList.add('light');
themeToggle?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('km-theme', root.classList.contains('light') ? 'light' : 'dark');
});

/* ── Mobile Menu ── */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

/* ── Sticky Header Shadow ── */
const siteHeader = document.getElementById('siteHeader');
if (siteHeader) {
  window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

/* ── Scroll Reveal (Intersection Observer) ── */
const revealEls = document.querySelectorAll('.reveal-up');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => observer.observe(el));
}

/* ── Counter Animation ── */
function animateCounter(el, target, duration = 1800) {
  let start = null;
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(easeOutCubic(progress) * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

const counterEls = document.querySelectorAll('.stat-number[data-count]');
if (counterEls.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObserver.observe(el));
}

/* ── Typed Text Effect ── */
const typedEl = document.getElementById('typedText');
if (typedEl) {
  const words = ['momentum.', 'results.', 'growth.', 'revenue.'];
  let wordIndex = 0, charIndex = 0, deleting = false;
  function typeLoop() {
    const current = words[wordIndex];
    if (!deleting) {
      typedEl.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 2200);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(typeLoop, deleting ? 55 : 95);
  }
  setTimeout(typeLoop, 1000);
}

/* ── Utility: JSON loader ── */
async function loadJSON(path) {
  const r = await fetch(path);
  if (!r.ok) throw new Error(path);
  return r.json();
}

/* ── Services Grid ── */
const serviceGrid = document.getElementById('serviceGrid');
if (serviceGrid) {
  loadJSON('data/services.json').then(items => {
    items.slice(0, 6).forEach((s, i) => {
      const el = document.createElement('article');
      el.className = 'service-card reveal-up';
      el.style.animationDelay = `${i * 0.07}s`;
      el.innerHTML = `
        <div class="service-icon">${s.icon}</div>
        <h3>${s.name}</h3>
        <small>${s.short}</small>
        <p>${s.description}</p>
      `;
      serviceGrid.appendChild(el);
    });
    // Re-observe new elements
    document.querySelectorAll('.service-card.reveal-up').forEach(el => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.1 });
      obs.observe(el);
    });
  }).catch(() => {});
}

/* ── Portfolio Grid ── */
const portfolioGrid = document.getElementById('portfolioGrid');
if (portfolioGrid) {
  loadJSON('data/portfolio.json').then(items => {
    items.forEach((p, i) => {
      const el = document.createElement('article');
      el.className = 'work-card reveal-up';
      el.style.animationDelay = `${i * 0.1}s`;
      const isExternal = p.image.startsWith('http');
      el.innerHTML = `
        <div class="work-card-img">
          <img src="${p.image}" alt="${p.title}" loading="lazy" ${isExternal ? '' : ''}>
        </div>
        <div class="work-body">
          <small>${p.tag}</small>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <span class="metric-label">✦ ${p.metric}</span>
        </div>
      `;
      portfolioGrid.appendChild(el);
    });
    document.querySelectorAll('.work-card.reveal-up').forEach(el => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.1 });
      obs.observe(el);
    });
  }).catch(() => {});
}

/* ── Contact Form (with local storage) ── */
const form = document.getElementById('leadForm');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem('km-last-lead', JSON.stringify({ ...data, submittedAt: new Date().toISOString() }));
  const status = document.getElementById('formStatus');
  if (status) {
    status.innerHTML = '✓ Thanks — your brief is saved. Connect the form to your n8n webhook before going live.';
    status.style.color = '#22c55e';
  }
  form.reset();
});

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mobileMenu?.classList.remove('open');
    }
  });
});

/* ── Parallax: hero art subtle movement on scroll ── */
const heroArt = document.querySelector('.hero-art');
if (heroArt) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroArt.style.transform = `translateY(${scrollY * 0.06}px)`;
    }
  }, { passive: true });
}

/* ── Initial reveal for above-fold elements ── */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal-up').forEach(el => el.classList.add('visible'));
  }, 100);
});
