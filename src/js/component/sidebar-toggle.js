export function initSidebarToggle({
  toggleButtonId = 'toggle-btn',
  sidebarId = 'sidebar',
  logoSelector = '.logo',
  collapsedClass = 'sidebar_collapsed',
} = {}) {
  const toggleButton = document.getElementById(toggleButtonId);
  const sidebar = document.getElementById(sidebarId);
  const logos = document.querySelectorAll(logoSelector);

  if (!sidebar) return;

  function toggleSidebar() {
    sidebar.classList.toggle(collapsedClass);
  }

  toggleButton?.addEventListener('click', toggleSidebar);

  logos.forEach((logo) => {
    logo.addEventListener('click', toggleSidebar);
  });
}
