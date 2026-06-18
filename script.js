// Otwieranie / zamykanie menu na telefonie
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Po kliknięciu w link w menu — zamknij menu (na telefonie)
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Automatyczne wstawienie aktualnego roku w stopce
document.getElementById('year').textContent = new Date().getFullYear();

// Przycisk "do góry" — pokaż po przewinięciu w dół
const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 500);
  });
}

// Galeria — powiększanie zdjęć (lightbox)
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImg = document.getElementById('lightboxImg');
  document.querySelectorAll('.gallery-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img');
      if (!img) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });
  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  };
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
}

// Jeśli brak zdjęć w galerii — pokaż komunikat zastępczy
window.addEventListener('load', () => {
  const empty = document.getElementById('galleryEmpty');
  if (!empty) return;
  const visible = [...document.querySelectorAll('.gallery-item')]
    .filter((b) => b.style.display !== 'none');
  empty.style.display = visible.length ? 'none' : 'block';
});
