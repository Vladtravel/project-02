import getRefs from './getRefs';
import NewApiServiceTrend from './apiServiceClass';
import { createPagination } from './pagination';

import filmsTpl from '../templates/films-gallery-markup.hbs';
import plugTpl from '../templates/plug.hbs';

import { onClickTheme } from './toolbar';

const galleryList = document.querySelector('.gallery-list');
const spiner = document.querySelector('.sk-fading-circle');

const newApiServiceTrend = new NewApiServiceTrend();

let refs = getRefs();

refs.btnHome.addEventListener('click', onBtnHomeAndLogoClick);
refs.logo.addEventListener('click', onBtnHomeAndLogoClick);

function onBtnHomeAndLogoClick() {
  clearGalleryContainer();
  newApiServiceTrend.page = 1;
  renderPopFilms();
  fetchDataOfPopularFilms();
}

renderPopFilms();
fetchDataOfPopularFilms();

function filmsMarkup(results) {
  galleryList.insertAdjacentHTML('beforeend', filmsTpl(results));
  plugMarkup();
}

function plugMarkup() {
  galleryList.insertAdjacentHTML('beforeend', plugTpl());
}

export function renderPopFilms() {
  newApiServiceTrend.insertGenresToFilm().then(results => {
    filmsMarkup(results);
    onClickTheme();
  });
}

function clearGalleryContainer() {
  galleryList.innerHTML = '';
}
// const decrementBtn = document.querySelector('.js-decrementBtn');
// const incrementBtn = document.querySelector('.js-incrementBtn');

// incrementBtn.addEventListener('click', onIncrementBtnClick);

// function onIncrementBtnClick(e) {
//   e.preventDefault();
//   clearGalleryContainer();
//   const a = Number(newApiServiceTrend.page);
//   newApiServiceTrend.page = a + 1;
//   window.scrollTo({ top: 0, behavior: 'smooth' });

//   renderPopFilms();
// }

// Pagination-----------------------------------------

function fetchPopularFilmsByPage(page) {
  newApiServiceTrend.pageNum = page;
  return newApiServiceTrend.insertGenresToFilm();
}

export function fetchDataOfPopularFilms() {
  newApiServiceTrend.fetchFilmsPages().then(results => {
    createPagination(results.total_pages, results.results, displayList);
  });
}

function displayList(wrapper, page) {
  wrapper.innerHTML = '';
  fetchPopularFilmsByPage(page).then(renderPopFilms);
}

// function renderFilmsCard(results) {
//   galleryList.innerHTML = filmsMarkup(results);
// }
