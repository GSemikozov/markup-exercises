const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const logos = document.querySelectorAll('.logo');

function toggleSidebar() {
  sidebar.classList.toggle('sidebar_collapsed');
}

document.addEventListener('DOMContentLoaded', () => {
  toggleButton?.addEventListener('click', toggleSidebar);

  logos.forEach((logo) => {
    logo.addEventListener('click', toggleSidebar);
  });
});
