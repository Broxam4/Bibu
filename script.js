(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const syncHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  syncHeader(); window.addEventListener('scroll', syncHeader, {passive:true});
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); menuButton.setAttribute('aria-expanded','false');
    }));
  }
  const items=document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
    items.forEach(x=>io.observe(x));
  } else items.forEach(x=>x.classList.add('visible'));
})();