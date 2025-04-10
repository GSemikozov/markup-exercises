const DATA_THEME = {
  body_attribute_key: 'data-theme',
  storage_key: 'data-theme',
  value_default: 'light',
  value_dark: 'dark',

  getCurrentTheme: () => localStorage.getItem(DATA_THEME.storage_key) || document.documentElement.getAttribute(DATA_THEME.body_attribute_key),

  setTheme: (theme = null, storage = true) => {
    if (theme !== DATA_THEME.value_default && theme !== DATA_THEME.value_dark) {
      theme = DATA_THEME.value_default;
    }

    document.documentElement.setAttribute(DATA_THEME.body_attribute_key, theme);

    if (storage) {
      localStorage.setItem(DATA_THEME.storage_key, theme);
    }

    DATA_THEME.dataSrcDark();
    updateThemeLabels(theme);

    return true;
  },

  toggleTheme: () => {
    let theme = DATA_THEME.getCurrentTheme();

    if (theme === DATA_THEME.value_default) {
      theme = DATA_THEME.value_dark;
    } else {
      theme = DATA_THEME.value_default;
    }

    DATA_THEME.setTheme(theme);

    return true;
  },

  dataSrcDark: () => {
    const currentTheme = DATA_THEME.getCurrentTheme();

    document.querySelectorAll('[data-src-dark]').forEach((item) => {
      if (!item.srcLight) {
        item.srcLight = item.src;
      }

      const { srcLight } = item;
      const srcDark = item.srcDark || item.getAttribute('data-src-dark') || srcLight;

      item.src = DATA_THEME.value_dark === currentTheme ? srcDark : srcLight;
    });

    return true;
  },
};

const initialTheme = DATA_THEME.getCurrentTheme();
if (initialTheme) {
  DATA_THEME.setTheme(initialTheme);
} else {
  let theme = DATA_THEME.value_default;

  if (window.matchMedia) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? DATA_THEME.value_dark : DATA_THEME.value_default;

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const t = event.matches ? DATA_THEME.value_dark : DATA_THEME.value_default;
      DATA_THEME.setTheme(t, false);
    });
  }

  DATA_THEME.setTheme(theme, false);
}

document.addEventListener('change', (event) => {
  const themeToggler = event.target.closest('[data-theme-toggle]');

  if (!themeToggler) {
    return false;
  }

  event.preventDefault();

  DATA_THEME.toggleTheme();
});

document.addEventListener('DOMContentLoaded', () => {
  const theme = DATA_THEME.getCurrentTheme();
  updateThemeLabels(theme);
  DATA_THEME.dataSrcDark();
});

function updateThemeLabels(currentTheme) {
  const showLight = document.querySelector('[data-theme-label="dark"]');
  const showDark = document.querySelector('[data-theme-label="light"]');

  if (!showDark || !showLight) return;

  if (currentTheme === DATA_THEME.value_dark) {
    showDark.classList.add('hidden');
    showLight.classList.remove('hidden');
  } else {
    showDark.classList.remove('hidden');
    showLight.classList.add('hidden');
  }

  const switcher = document.querySelector('[data-theme-toggle]');
  if (switcher) {
    switcher.setAttribute('aria-checked', currentTheme === DATA_THEME.value_dark);
  }
}
