// Drawer toggle logic for mobile navigation
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

function toggleDrawer() {
  const isActive = drawer.classList.toggle('active');
  overlay.classList.toggle('active', isActive);
  drawer.setAttribute('aria-hidden', !isActive);
  overlay.setAttribute('aria-hidden', !isActive);

  // Prevent body scroll when drawer is open
  document.body.style.overflow = isActive ? 'hidden' : '';
}

function closeDrawer() {
  if (drawer.classList.contains('active')) {
    toggleDrawer();
  }
}

// Close drawer on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer.classList.contains('active')) {
    toggleDrawer();
  }
});

// Ensure drawer closes when resizing to desktop
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth >= 769 && drawer.classList.contains('active')) {
      toggleDrawer();
    }
  }, 120);
});
