document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('.theme-toggle');

  const icons = {
    suns: document.querySelectorAll('.icon-sun'),
    moons: document.querySelectorAll('.icon-moon'),
  };

  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
  };

  // init
  root.dataset.theme = localStorage.getItem('theme') || THEMES.LIGHT;

  const isDark = () => root.dataset.theme === THEMES.DARK;

  function setTheme(theme) {
    root.dataset.theme = theme;

    localStorage.setItem('theme', theme);

    updateIcons();
  }

  function updateIcons() {
    const dark = isDark();

    icons.suns.forEach((icon) => icon.classList.toggle('active', dark));

    icons.moons.forEach((icon) => icon.classList.toggle('active', !dark));
  }

  function toggleTheme() {
    setTheme(isDark() ? THEMES.LIGHT : THEMES.DARK);
  }

  buttons.forEach((btn) => btn.addEventListener('click', toggleTheme));

  updateIcons();
});
