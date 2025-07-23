export function initMenu() {
  const isDesktop = window.innerWidth > 600;
  if (!isDesktop) return;

  const menu = document.querySelector('.header__menu');
  const links = document.querySelectorAll('.header__link');
  const underline = document.querySelector('.underline-indicator');
  const header = document.querySelector('.header');

  if (!menu || !underline || !header || links.length === 0) {
    setTimeout(initMenu, 100);
    return;
  }

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const rect = link.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      underline.style.left = `${rect.left - headerRect.left}px`;
      underline.style.width = `${rect.width}px`;
    });

    link.addEventListener('mouseleave', () => {
      underline.style.width = '0';
    });
  });

  console.log('initMenu cargado (escritorio)');
}