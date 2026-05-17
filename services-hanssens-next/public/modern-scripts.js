document.addEventListener('DOMContentLoaded', function () {
  try {
    const PHONE = '0497694937'

    // Ensure header exists
    if (!document.querySelector('.modern-header')) {
      const header = document.createElement('header')
      header.className = 'site-header modern-header'
      const wrapper = document.createElement('div')
      wrapper.className = 'limit-wrapper'
      const left = document.createElement('a')
      left.href = '/'
      left.className = 'site-logo'
      left.textContent = document.title || 'Service Hanssens'
      // try to use favicon as small logo
      const favicon = document.querySelector("link[rel~='icon']")
      if (favicon) {
        const img = document.createElement('img')
        img.src = favicon.getAttribute('href') || '/wp-content/uploads/2023/10/cropped-android-chrome-512x512-1-32x32.png'
        img.alt = 'logo'
        img.style.height = '38px'
        img.style.marginRight = '8px'
        left.prepend(img)
      }
      wrapper.appendChild(left)

      const toggle = document.createElement('button')
      toggle.className = 'menu-toggle'
      toggle.innerHTML = '☰'
      toggle.setAttribute('aria-label', 'Menu')
      wrapper.appendChild(toggle)

      const right = document.createElement('nav')
      right.className = 'main-menu'
      const phones = document.createElement('a')
      phones.href = 'tel:' + PHONE
      phones.className = 'cta-phone'
      phones.textContent = 'Appelez ' + PHONE
      right.appendChild(phones)
      wrapper.appendChild(right)

      header.appendChild(wrapper)
      document.body.insertBefore(header, document.body.firstChild)
    }

    // Add floating call button
    if (!document.querySelector('.floating-call')) {
      const btn = document.createElement('a')
      btn.className = 'floating-call'
      btn.href = 'tel:' + PHONE
      btn.innerHTML = '<span>☎</span>Appeler'
      document.body.appendChild(btn)
    }

    // Replace broken or missing images with a default
    const defaultImg = '/wp-content/uploads/2023/10/ontstopper-6.png'
    document.querySelectorAll('img').forEach((img) => {
      try {
        if (!img.src || img.src.endsWith('/') || img.naturalWidth === 0) {
          img.src = defaultImg
        }
      } catch (e) { img.src = defaultImg }
      img.classList.add('modern-img')
    })

    // Wrap service modules in cards
    const selectors = ['.service-box', '.fl-module', '.widget', '.post', '.entry-content > div']
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (!el.classList.contains('card')) el.classList.add('card')
      })
    })

    // Build a modern landing layout on homepage
    if (location.pathname === '/' || location.pathname === '' || location.pathname.endsWith('index.html')) {
      const main = document.querySelector('#main') || document.querySelector('main') || document.body
      if (main && !document.querySelector('.modern-hero')) {
        // remove large existing hero sections to avoid duplication
        document.querySelectorAll('.rev_slider, .slider, .site-hero, .page-title, .fl-row-full-width').forEach(n => n.remove())

        const hero = document.createElement('section')
        hero.className = 'modern-hero container'

        const copy = document.createElement('div')
        copy.className = 'hero-copy'
        const h = document.createElement('h1')
        h.textContent = 'Débouchage rapide et fiable — Service Hanssens'
        const p = document.createElement('p')
        p.textContent = 'Intervention 24/7 pour canalisations, éviers, douches et toilettes. Techniciens expérimentés.'
        const ctas = document.createElement('div')
        ctas.className = 'hero-ctas'
        const call = document.createElement('a')
        call.className = 'btn-primary'
        call.href = 'tel:' + PHONE
        call.textContent = 'Appeler maintenant'
        const book = document.createElement('a')
        book.className = 'btn-outline'
        book.href = '/contact/'
        book.textContent = 'Demander un devis'
        ctas.appendChild(call)
        ctas.appendChild(book)
        copy.appendChild(h)
        copy.appendChild(p)
        copy.appendChild(ctas)

        const imageWrap = document.createElement('div')
        imageWrap.className = 'hero-image'
        const heroImg = document.createElement('img')
        heroImg.src = '/wp-content/uploads/2023/10/plumber_2-scaled-e1745536127998-1260x884.jpg'
        heroImg.alt = 'Plombier Service Hanssens'
        imageWrap.appendChild(heroImg)

        hero.appendChild(copy)
        hero.appendChild(imageWrap)
        main.insertBefore(hero, main.firstChild)

        // Services grid
        const services = document.createElement('section')
        services.className = 'services-grid container'
        const items = [
          {img:'/wp-content/uploads/2023/10/ontstopping-afvoer.png',title:'Débouchage éviers',desc:'Éviers, lavabo, cuisine — intervention rapide.'},
          {img:'/wp-content/uploads/2023/10/ontstopping-toilet-2.png',title:'Toilettes bouchées',desc:'Débouchage et nettoyage professionnel.'},
          {img:'/wp-content/uploads/2023/10/ontstopping-douche-bad-1.png',title:'Douche & baignoire',desc:'Réparation et entretien des drains.'}
        ]
        items.forEach(it => {
          const c = document.createElement('div')
          c.className = 'service-card'
          const i = document.createElement('img')
          i.src = it.img
          const d = document.createElement('div')
          const t = document.createElement('h3')
          t.textContent = it.title
          const pd = document.createElement('p')
          pd.textContent = it.desc
          d.appendChild(t)
          d.appendChild(pd)
          c.appendChild(i)
          c.appendChild(d)
          services.appendChild(c)
        })
        main.insertBefore(services, hero.nextSibling)

        // Trust row and contact box
        const trust = document.createElement('div')
        trust.className = 'trust-row container'
        const b1 = document.createElement('div')
        b1.className = 'trust-badge'
        b1.textContent = '24/7 — Intervention rapide'
        const b2 = document.createElement('div')
        b2.className = 'trust-badge'
        b2.textContent = 'Garantie satisfaction'
        const contactBox = document.createElement('div')
        contactBox.className = 'contact-box'
        contactBox.innerHTML = '<strong>Contactez-nous</strong><br/><a href="tel:'+PHONE+'">'+PHONE+'</a><p>Ou envoyez un message via la page contact.</p>'
        trust.appendChild(b1)
        trust.appendChild(b2)
        trust.appendChild(contactBox)
        main.insertBefore(trust, services.nextSibling)
        // mark hero for animation
        setTimeout(()=>{ const h = document.querySelector('.modern-hero'); if (h) h.classList.add('in-view') }, 120)
      }
    }

    // Minor cleanups: remove excessive inline widths
    document.querySelectorAll('[width]').forEach(el => el.removeAttribute('width'))

    // Menu toggle behavior
    const toggleBtn = document.querySelector('.menu-toggle')
    const nav = document.querySelector('.main-menu')
    if (toggleBtn && nav) {
      toggleBtn.addEventListener('click', ()=>{
        nav.classList.toggle('mobile-open')
      })
    }

    // Intersection observer for reveal animations
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if (e.isIntersecting) e.target.classList.add('in-view')
      })
    }, {threshold:0.12})
    document.querySelectorAll('.service-card, .trust-row, .contact-box').forEach(n=>io.observe(n))
