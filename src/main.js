import './style.css';

const WHATSAPP = 'https://wa.me/212661804348';
const MAP = 'https://www.google.com/maps/search/?api=1&query=33.8762129%2C-5.5372576';
const INSTAGRAM = 'https://www.instagram.com/palais_laraki/';

const copy = {
  fr: {
    nav: ['Le palais', 'Vos événements', 'Galerie', 'Accès'],
    contact: 'Parler de votre événement',
    kicker: 'Palais Laraki · Meknès',
    title: 'Recevoir devient un art.',
    heroBody: 'Un lieu de réception pour les moments que vous souhaitez partager, célébrer et garder en mémoire.',
    discover: 'Découvrir le palais',
    quote: 'Chaque grand moment commence par un lieu.',
    aboutLabel: 'Un cadre pour se réunir',
    aboutTitle: 'Une adresse, vos histoires.',
    aboutBody: 'À Meknès, Palais Laraki accueille les familles et leurs invités pour des célébrations qui leur ressemblent. De la première visite à la réception, chaque projet commence par une conversation.',
    aboutLink: 'Voir les images',
    occasionTitle: 'À chaque occasion, son moment.',
    occasionIntro: 'Parlez-nous de votre date, de vos invités et de ce que vous imaginez.',
    occasions: [
      ['Mariages', 'Une journée à construire autour de votre histoire et de vos proches.'],
      ['Fêtes & traditions', 'Une réception pour réunir les générations et célébrer ensemble.'],
      ['Traiteur', 'Une table pensée pour accompagner le rythme de votre événement.'],
    ],
    galleryTitle: 'Des images pour imaginer la suite.',
    galleryIntro: 'Le lieu, les tables et les instants partagés à Palais Laraki.',
    galleryCaptions: ['L’entrée du palais', 'La réception', 'Les arts de la table', 'Une soirée au palais'],
    contactLabel: 'Votre prochaine réception',
    contactTitle: 'Parlons de votre projet.',
    contactBody: 'Indiquez la date, le type d’événement et le nombre d’invités. L’équipe pourra vous renseigner sur les disponibilités et les possibilités du lieu.',
    askQuote: 'Demander un devis',
    visit: 'Venir au palais',
    address: 'Boulevard Abderrahmane Ben Zidane, Meknès, Maroc',
    directions: 'Ouvrir l’itinéraire',
    instagram: 'Voir Instagram',
    footerLine: 'Un lieu pour vos moments à partager.',
    disclaimer: 'Site de démonstration indépendant. Photos publiques de Palais Laraki via Zafaf.ma et Darzawaj.com. Informations, prestations et visuels à valider par l’établissement.',
    skip: 'Aller au contenu',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
  },
  en: {
    nav: ['The venue', 'Your events', 'Gallery', 'Visit'],
    contact: 'Discuss your event',
    kicker: 'Palais Laraki · Meknes',
    title: 'The art of gathering.',
    heroBody: 'A reception venue for the moments you want to share, celebrate and remember.',
    discover: 'Explore the venue',
    quote: 'Every memorable occasion begins somewhere.',
    aboutLabel: 'A place to come together',
    aboutTitle: 'One venue, many stories.',
    aboutBody: 'In Meknes, Palais Laraki welcomes families and their guests for celebrations shaped around them. From the first visit to the reception, every project begins with a conversation.',
    aboutLink: 'See the gallery',
    occasionTitle: 'A setting for every occasion.',
    occasionIntro: 'Tell us your date, your guest count and what you have in mind.',
    occasions: [
      ['Weddings', 'A day built around your story and the people close to you.'],
      ['Celebrations & traditions', 'Bring generations together for a shared celebration.'],
      ['Catering', 'A table designed to accompany the rhythm of your event.'],
    ],
    galleryTitle: 'Picture your event here.',
    galleryIntro: 'The venue, the tables and moments shared at Palais Laraki.',
    galleryCaptions: ['The entrance', 'The reception', 'Table details', 'An evening at the palace'],
    contactLabel: 'Your next reception',
    contactTitle: 'Tell us about your plans.',
    contactBody: 'Share the date, type of event and number of guests. The team can advise on availability and what the venue can offer.',
    askQuote: 'Request a quote',
    visit: 'Visit the venue',
    address: 'Boulevard Abderrahmane Ben Zidane, Meknes, Morocco',
    directions: 'Get directions',
    instagram: 'View Instagram',
    footerLine: 'A place for moments shared.',
    disclaimer: 'Independent concept website. Public Palais Laraki photos via Zafaf.ma and Darzawaj.com. Details, services and imagery to be confirmed by the venue.',
    skip: 'Skip to content',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  ar: {
    nav: ['القصر', 'مناسباتكم', 'الصور', 'الموقع'],
    contact: 'تحدثوا معنا عن مناسبتكم',
    kicker: 'قصر العراقي · مكناس',
    title: 'لفرحكم مكان يليق به.',
    heroBody: 'فضاء للاستقبال يجمع من تحبون في اللحظات التي تستحق الاحتفاء والذكرى.',
    discover: 'اكتشفوا القصر',
    quote: 'كل لحظة مميزة تبدأ من مكان.',
    aboutLabel: 'مكان يجمع الأحبة',
    aboutTitle: 'مكان واحد، حكايات كثيرة.',
    aboutBody: 'في مكناس، يستقبل قصر العراقي العائلات وضيوفها للاحتفال بمناسباتهم. من الزيارة الأولى إلى يوم الحفل، تبدأ كل مناسبة بحوار.',
    aboutLink: 'شاهدوا الصور',
    occasionTitle: 'لكل مناسبة لحظتها.',
    occasionIntro: 'أخبرونا بالتاريخ وعدد الضيوف وما تتصورونه ليومكم.',
    occasions: [
      ['حفلات الزفاف', 'يوم يجمع قصتكم بمن تحبون.'],
      ['الحفلات والمناسبات', 'استقبال يجمع الأجيال للاحتفال معًا.'],
      ['خدمة الطعام', 'مائدة ترافق إيقاع مناسبتكم.'],
    ],
    galleryTitle: 'تخيلوا مناسبتكم هنا.',
    galleryIntro: 'المكان والموائد واللحظات المشتركة في قصر العراقي.',
    galleryCaptions: ['مدخل القصر', 'فضاء الاستقبال', 'تفاصيل المائدة', 'أمسية في القصر'],
    contactLabel: 'مناسبتكم القادمة',
    contactTitle: 'حدثونا عن خططكم.',
    contactBody: 'أرسلوا التاريخ ونوع المناسبة وعدد الضيوف. يمكن للفريق إخباركم بالتوافر وخيارات المكان.',
    askQuote: 'اطلبوا عرضًا',
    visit: 'زوروا القصر',
    address: 'شارع عبد الرحمن بن زيدان، مكناس، المغرب',
    directions: 'افتحوا الاتجاهات',
    instagram: 'شاهدوا إنستغرام',
    footerLine: 'مكان للحظات التي تجمعكم.',
    disclaimer: 'موقع تجريبي مستقل. صور عامة لقصر العراقي عبر Zafaf.ma وDarzawaj.com. التفاصيل والخدمات والصور تحتاج إلى تأكيد من المؤسسة.',
    skip: 'الانتقال إلى المحتوى',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
  },
};

const photos = [
  ['entrance.jpg', 'Façade et entrée de Palais Laraki'],
  ['ceremony.jpg', 'Décoration de réception à Palais Laraki'],
  ['table.jpg', 'Table dressée pour une réception à Palais Laraki'],
  ['evening.jpg', 'Soirée et musique à Palais Laraki'],
];

let lang = ['fr', 'en', 'ar'].includes(localStorage.getItem('palais-laraki-lang')) ? localStorage.getItem('palais-laraki-lang') : 'fr';

function render() {
  const t = copy[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = `${lang === 'ar' ? 'قصر العراقي' : 'Palais Laraki'} | ${lang === 'en' ? 'Receptions in Meknes' : lang === 'ar' ? 'مكناس' : 'Réceptions à Meknès'}`;
  document.querySelector('.skip').textContent = t.skip;
  document.querySelector('#app').innerHTML = `
    <header class="header" id="top">
      <a class="brand" href="#top" aria-label="Palais Laraki"><span class="brand-mark" aria-hidden="true"></span><span class="brand-name">Palais <i>Laraki</i><small>MEKNÈS</small></span></a>
      <nav class="nav" aria-label="Navigation principale">
        <a href="#lieu">${t.nav[0]}</a><a href="#occasions">${t.nav[1]}</a><a href="#galerie">${t.nav[2]}</a><a href="#acces">${t.nav[3]}</a>
      </nav>
      <div class="header-actions">
        <div class="lang-switch" role="group" aria-label="Language"><button data-lang="fr" aria-pressed="${lang==='fr'}">FR</button><span>/</span><button data-lang="en" aria-pressed="${lang==='en'}">EN</button><span>/</span><button data-lang="ar" aria-pressed="${lang==='ar'}">AR</button></div>
        <a class="header-cta" href="${WHATSAPP}" target="_blank" rel="noopener noreferrer">${t.contact}<span aria-hidden="true">↗</span></a>
        <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="${t.menuOpen}"><span></span><span></span></button>
      </div>
      <nav class="mobile-nav" id="mobile-nav" aria-label="Navigation mobile"><a href="#lieu">${t.nav[0]}</a><a href="#occasions">${t.nav[1]}</a><a href="#galerie">${t.nav[2]}</a><a href="#acces">${t.nav[3]}</a><a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer">${t.contact}</a></nav>
    </header>
    <main id="main">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <div class="hero-copy-inner"><p class="hero-kicker">${t.kicker}</p><h1 id="hero-title">${t.title}</h1><p class="hero-desc">${t.heroBody}</p><div class="hero-links"><a class="button button-gold" href="${WHATSAPP}" target="_blank" rel="noopener noreferrer">${t.askQuote}<span aria-hidden="true">↗</span></a><a class="text-link" href="#lieu">${t.discover}<span aria-hidden="true">↓</span></a></div></div>
          <p class="hero-bottom">${t.quote}</p>
        </div>
        <div class="hero-photo"><img src="./images/hall.jpg" alt="Grande salle de réception du Palais Laraki" fetchpriority="high"><span class="photo-stamp" aria-hidden="true">PL</span></div>
      </section>
      <section class="intro section" id="lieu"><div class="intro-image reveal"><img src="./images/ceremony.jpg" alt="${photos[1][1]}" loading="lazy"></div><div class="intro-copy reveal"><p class="section-label">${t.aboutLabel}</p><h2>${t.aboutTitle}</h2><p>${t.aboutBody}</p><a class="under-link" href="#galerie">${t.aboutLink}<span aria-hidden="true">↗</span></a></div></section>
      <section class="occasions section" id="occasions"><div class="occasion-head reveal"><h2>${t.occasionTitle}</h2><p>${t.occasionIntro}</p></div><div class="occasion-list">${t.occasions.map(([title, body], i) => `<article class="occasion reveal"><span class="occasion-num">0${i+1}</span><h3>${title}</h3><p>${body}</p><a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer" aria-label="${t.contact}: ${title}"><span aria-hidden="true">↗</span></a></article>`).join('')}</div></section>
      <section class="gallery section" id="galerie"><div class="gallery-head reveal"><h2>${t.galleryTitle}</h2><p>${t.galleryIntro}</p></div><div class="gallery-grid">${photos.map(([file, alt], i) => `<figure class="gallery-item item-${i+1} reveal"><img src="./images/${file}" alt="${alt}" loading="lazy"><figcaption>${t.galleryCaptions[i]}</figcaption></figure>`).join('')}</div></section>
      <section class="contact-band" id="contact"><div class="contact-band-inner reveal"><p>${t.contactLabel}</p><h2>${t.contactTitle}</h2><p class="contact-desc">${t.contactBody}</p><a class="button button-gold" href="${WHATSAPP}" target="_blank" rel="noopener noreferrer">${t.askQuote}<span aria-hidden="true">↗</span></a></div><div class="contact-flourish" aria-hidden="true"></div></section>
      <section class="access section" id="acces"><div class="access-copy reveal"><p class="section-label">Meknès</p><h2>${t.visit}</h2><address>${t.address}</address><div class="access-links"><a class="under-link" href="${MAP}" target="_blank" rel="noopener noreferrer">${t.directions}<span aria-hidden="true">↗</span></a><a class="under-link" href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">${t.instagram}<span aria-hidden="true">↗</span></a></div></div><div class="map-wrap reveal"><iframe title="Palais Laraki à Meknès" src="https://www.google.com/maps?q=33.8762129,-5.5372576&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></section>
    </main>
    <footer><div class="footer-main"><a class="brand footer-brand" href="#top"><span class="brand-mark" aria-hidden="true"></span><span class="brand-name">Palais <i>Laraki</i><small>MEKNÈS</small></span></a><p>${t.footerLine}</p></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Palais Laraki</span><span>${t.disclaimer}</span><a href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></footer>
  `;

  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    lang = button.dataset.lang;
    localStorage.setItem('palais-laraki-lang', lang);
    render();
  }));
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? t.menuClose : t.menuOpen);
    document.querySelector('.mobile-nav').classList.toggle('open', open);
  });
  document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => {
    document.querySelector('.mobile-nav').classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
  const elements = document.querySelectorAll('.reveal');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: .08, rootMargin: '0px 0px -35px 0px' });
    elements.forEach(el => observer.observe(el));
  }
}

render();
