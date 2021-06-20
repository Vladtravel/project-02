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
  clearGalleryContainer();
  newApiServiceTrend.insertGenresToFilm().then(results => {
    filmsMarkup(results);
  });
}

const decrementBtn = document.querySelector('.js-decrementBtn');
const incrementBtn = document.querySelector('.js-incrementBtn');

incrementBtn.addEventListener('click', onIncrementBtnClick);

function onIncrementBtnClick(e) {
  e.preventDefault();
  newApiServiceTrend.incrementPage();
  clearGalleryContainer();
  render();
}

function clearGalleryContainer() {
  galleryList.innerHTML = '';
}
