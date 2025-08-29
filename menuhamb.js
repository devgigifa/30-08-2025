document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (!hamburger || !dropdownMenu) return; // nada a fazer se não existir

  hamburger.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'flex') {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'flex';
      dropdownMenu.style.flexDirection = 'column';
    }
  });

  // Fecha o menu ao clicar fora
  document.addEventListener('click', function(event) {
    if (!dropdownMenu.contains(event.target) && !hamburger.contains(event.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
});
