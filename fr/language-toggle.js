document.addEventListener('DOMContentLoaded', function() {
  console.log('Language toggle script loaded');
  const navLink = Array.from(document.querySelectorAll('#quarto-header .nav-link')).at(-1);
  const text = navLink.textContent.trim();
  console.log(`Last link text: ${text}`);

  navLink.addEventListener('click', function(e) {
      e.preventDefault();
      const currentPath = window.location.pathname;
      let newPath = currentPath;
      if (text === 'Français') {
        newPath = currentPath.replace('/en/', '/fr/');
      }
      else {
        newPath = currentPath.replace('/fr/', '/en/');
      }
      if (newPath !== currentPath) {
        window.location.href = newPath;
      }
    });
  });