async function loadJSON(path){const r=await fetch(path);if(!r.ok)throw new Error(path);return r.json();}
const servicesFullGrid=document.getElementById('servicesFullGrid');
if(servicesFullGrid){
  loadJSON('data/services.json').then(items=>{
    items.forEach((s,i)=>{
      const el=document.createElement('article');
      el.className='list-card reveal-up';
      el.style.animationDelay=`${i*0.06}s`;
      el.innerHTML=`
        <div class="service-icon">${s.icon}</div>
        <h3 style="margin:20px 0 6px;font-size:19px">${s.name}</h3>
        <small style="color:#77798a;font-size:12px">${s.short}</small>
        <p style="font-size:14px;margin-top:10px">${s.description}</p>
        <ul style="margin-top:14px">${s.deliverables.map(d=>`<li>${d}</li>`).join('')}</ul>
      `;
      servicesFullGrid.appendChild(el);
    });
    document.querySelectorAll('.list-card.reveal-up').forEach(el=>{
      const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:0.08});
      obs.observe(el);
    });
  }).catch(()=>{});
}
