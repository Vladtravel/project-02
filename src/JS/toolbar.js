import getRefs from './getRefs';
const refs = getRefs();

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
  Text: 'film-title-dark'
};

refs.checkBox.addEventListener('change', onClickTheme);

export function onClickTheme() {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  
  if (refs.checkBox.checked) {
    refs.body.classList.add(Theme.DARK);
    searchFilmsTitle()
    localStorage.setItem('themeBody', 'dark')
  } else {
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('themeBody', 'light');
    searchFilmsTitleDark();
  }
}
const localValue = localStorage.getItem('themeBody');

if (localValue === 'dark') {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  refs.checkBox.checked = true;
  searchFilmsTitle();
} else {
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);
  refs.checkBox.checked = false;
  searchFilmsTitleDark()
}

function searchFilmsTitle() {
  const filmTitle = document.querySelectorAll('.film-title');    
    filmTitle.forEach(el => {
      el.classList.replace('film-title', 'film-title-dark');
    });
}

function searchFilmsTitleDark() {
  const filmTitleEl = document.querySelectorAll('.film-title-dark');
    filmTitleEl.forEach(el => {      
      el.classList.replace('film-title-dark','film-title');
    });
}