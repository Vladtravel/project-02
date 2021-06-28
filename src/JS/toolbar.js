import getRefs from './getRefs';

const refs = getRefs();

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.checkBox.addEventListener('change', onClick);

function onClick() {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  if (refs.checkBox.checked) {
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('themeBody', 'dark');
  } else {
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('themeBody', 'light');
  }
}
const localValue = localStorage.getItem('themeBody');

if (localValue === 'dark') {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  refs.checkBox.checked = true;
} else {
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);
  refs.checkBox.checked = false;
}
