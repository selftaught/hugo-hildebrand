
(() => {
    'use strict'

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    const getStoredOrPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) {
        return storedTheme
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    const getCurrentTheme = () => {
      const htmlEls = document.getElementsByTagName('html');
      return htmlEls[0].getAttribute('data-bs-theme');
    }

    const setTheme = theme => {
      if (theme === 'auto') {
        const preferredTheme = (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-bs-theme', preferredTheme);
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }

    setTheme(getStoredOrPreferredTheme())

    const showActiveTheme = (theme, focus = false) => {
      const lightThemeIcon = document.querySelector('#light-theme-icon');
      const darkThemeIcon = document.querySelector('#dark-theme-icon');
      if (theme == 'dark') {
        lightThemeIcon.classList.add('d-none');
        darkThemeIcon.classList.remove('d-none');
      }
      else {
        lightThemeIcon.classList.remove('d-none');
        darkThemeIcon.classList.add('d-none');
      }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme()
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getStoredOrPreferredTheme())
      }
    })

    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getStoredOrPreferredTheme());

      const themeSwitcherBtn = document.getElementById('theme-switcher');

      if (themeSwitcherBtn) {
        themeSwitcherBtn.addEventListener('click', () => {
          const currentTheme = getCurrentTheme();
          let newTheme = currentTheme == 'dark' ? 'light' : 'dark';
          setStoredTheme(newTheme);
          setTheme(newTheme);
          showActiveTheme(newTheme, true);
        });
      }
    })
  })()