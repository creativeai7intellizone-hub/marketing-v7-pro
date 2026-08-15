/* Portfolio page JS */
async function loadJSON(path) {
  const r = await fetch(path);
  if (!r.ok) throw new Error(path);
  return r.json();
}

const portfolioGridFull = document.getElementById('portfolioGridFull');
if (portfolioGridFull) {
  // Extended portfolio data for the full page
  const allItems = [
    {
      tag: "Meta Ads · E-commerce",
      title: "DTC Brand Growth System",
      desc: "Scaled a Dhaka-based fashion brand from ৳4L/mo to ৳29L/mo through Meta Ads systematic creative testing, retargeting funnels & offer optimization.",
      metric: "7.4× ROAS · 621% Revenue Growth",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=760&h=470&q=85&auto=format&fit=crop"
    },
    {
      tag: "Lead Generation · B2B",
      title: "High-Ticket Lead Funnel",
      desc: "Built a 3-stage lead qualification funnel for a SaaS client. Reduced cost-per-qualified-lead by 68% in 90 days using multi-channel paid strategy.",
      metric: "68% Lower CPL · 340 Qualified Leads/mo",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=760&h=470&q=85&auto=format&fit=crop"
    },
    {
      tag: "Google Ads · Search",
      title: "High-Intent Search Campaign",
      desc: "Restructured a legacy Google Ads account for a local services business. Tripled conversion rate using SKAG campaign architecture and landing page alignment.",
      metric: "3.1× Conversion Rate · 44% Lower CPA",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=760&h=470&q=85&auto=format&fit=crop"
    },
    {
      tag: "Social Media · Content",
      title: "Brand Content Engine",
      desc: "Designed a 90-day social content system for a lifestyle brand — from content pillars and calendar to creative direction and performance tracking.",
      metric: "4.8× Engagement · 112K New Followers",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=760&h=470&q=85&auto=format&fit=crop"
    },
    {
      tag: "Meta Ads · Local Business",
      title: "Restaurant Chain Lead Gen",
      desc: "Ran localized Meta Ads for a 6-location restaurant chain. Built geo-targeted awareness campaigns with offer mechanics that drove measurable foot traffic.",
      metric: "214% More Bookings · 3.8× ROAS",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=760&h=470&q=85&auto=format&fit=crop"
    },
    {
      tag: "Performance Marketing",
      title: "Full-Funnel E-learning Launch",
      desc: "Orchestrated a multi-channel paid launch for an online course brand across Meta, Google, and YouTube. Coordinated creative, targeting, and landing page.",
      metric: "৳18L Revenue · 340 Enrolments in 14 Days",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=760&h=470&q=85&auto=format&fit=crop"
    }
  ];

  allItems.forEach((p, i) => {
    const el = document.createElement('article');
    el.className = 'work-card reveal-up';
    el.style.animationDelay = `${i * 0.09}s`;
    el.innerHTML = `
      <div class="work-card-img">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
      <div class="work-body">
        <small>${p.tag}</small>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="metric-label">✦ ${p.metric}</span>
      </div>
    `;
    portfolioGridFull.appendChild(el);
  });

  // Observe for reveal
  document.querySelectorAll('.work-card.reveal-up').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    obs.observe(el);
  });
}

// Filter buttons (visual only — filter would need server-side or more JS)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
