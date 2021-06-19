const API_KEY = '612ad9e57f61526bfd55d457eca2466c';
const BASE_URL = 'https://api.themoviedb.org/3';

import NewApiServiceTrend from './apiServiceClass';

import filmsTpl from '../templates/films-gallery-markup.hbs';

const galleryList = document.querySelector('.gallery-list');

const newApiServiceTrend = new NewApiServiceTrend();

render();

function filmsMarkup(results) {
  galleryList.insertAdjacentHTML('beforeend', filmsTpl(results));
}

function render() {
  newApiServiceTrend.insertGenresToMovieObj().then(filmsMarkup);
}
