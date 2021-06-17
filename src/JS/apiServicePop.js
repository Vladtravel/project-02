const API_KEY = '612ad9e57f61526bfd55d457eca2466c';

import filmsTpl from '../templates/films-gallery-markup.hbs';

const galleryList = document.querySelector('.gallery-list');

function fetchFilms() {
  fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    .then(response => {
      return response.json();
    })
    .then(films => {
      filmsMarkup(films);
    });
}

function filmsMarkup(films) {
  galleryList.insertAdjacentHTML('beforeend', filmsTpl(films));
}

fetchFilms();
