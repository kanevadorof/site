
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  const tabs = document.querySelectorAll('[role="tablist"] [role="tab"]');
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = tab.closest('[role="tablist"]');
      parent.querySelectorAll('[role="tab"]').forEach((t) => t.setAttribute('aria-selected', 'false'));
      tab.setAttribute('aria-selected', 'true');

      const targetId = tab.getAttribute('data-target');
      if (targetId) {
        document.querySelectorAll('.tab-pane').forEach((pane) => pane.classList.remove('active'));
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
      }
    });
  });

  const searchInput = document.getElementById('pluginSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const items = document.querySelectorAll('.plugin-card');
      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(term) ? 'block' : 'none';
      });
    });
  }

  const contactForm = document.getElementById('contactForm');
  const modalOverlay = document.getElementById('modalOverlay');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (contactForm && modalOverlay) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('userName')?.value || 'Пользователь';
      const modalMsg = document.getElementById('modalMessage');
      if (modalMsg) {
        modalMsg.textContent = `Спасибо, ${name}! Ваша заявка успешно принята системой DevTools 98.`;
      }
      modalOverlay.classList.add('open');
      contactForm.reset();
    });
  }

  if (closeModalBtn && modalOverlay) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('remove') || modalOverlay.classList.remove('open');
    });
  }

  const pollForm = document.getElementById('sidebarPollForm');
  const pollRes = document.getElementById('sidebarPollResult');
  if (pollForm && pollRes) {
    pollForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const checked = pollForm.querySelector('input[name="pollBrowser"]:checked');
      if (checked) {
        pollRes.textContent = `Ваш голос за ${checked.value} записан!`;
        pollRes.style.color = '#008000';
      } else {
        pollRes.textContent = 'Выберите браузер!';
        pollRes.style.color = '#aa0000';
      }
    });
  }
});