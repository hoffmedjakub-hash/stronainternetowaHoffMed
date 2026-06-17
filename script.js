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
