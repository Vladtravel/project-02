import VideoApiService from './apiServiceSearch';
import searchFilm from '../templates/films-gallery-markup.hbs';
import { createPagination } from './pagination';

const filmApiService = new VideoApiService();
const formInput = document.querySelector('#search-form');
const galleryList = document.querySelector('.gallery-list');

formInput.addEventListener('submit', searchingFilm);

function searchingFilm(e) {
  filmApiService.page = 1;

  e.preventDefault();
  
  const form = e.currentTarget;
  const input = form.elements.query;
  filmApiService.query = input.value;
  renderSearchFilms(filmApiService.query);
}

// renders search list
function renderSearchFilms (searchQuery) {
  filmApiService.query = searchQuery;
  filmApiService
    .insertGenresToSearch()
    .then(renderFilmsCard)
    .catch(err => {
      console.log('error in function render');
    });
}

// render markup
function renderFilmsCard(articles) {
  galleryList.innerHTML = searchFilm(articles);
}

// renders movies by appropriate page & search query
// function displaySearchListByPage(wrapper, page, searchQuery) {
//   wrapper.innerHTML = '';
//   fetchFilmsPages(page, searchQuery)
//     .then(renderFilmsCard)
//     .catch(err => {
//       console.log('error in function displaySearchListByPage');
//       listElement.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
//     });
// }


// Pagination-----------------------------------------

function fetchSearchFilmsByPage(page, searchQuery) {
  filmApiService.pageNum = page;
  filmApiService.query = searchQuery;
  return filmApiService.insertGenresToSearch();
}

export function fetchDataOfSearchFilms() {
  filmApiService.fetchFilmsPages().then(results => {
    createPagination(results.total_pages, results.results, displayList);
  });
}

function displayList(wrapper, page) {
  wrapper.innerHTML = '';
  fetchSearchFilmsByPage(page, searchQuery).then(renderSearchFilms);
}


// ================
// fetches search queries by appropriate page & search query
// function fetchSearchFilmsByPage(page, searchQuery) {
//   filmApiService.pageNum = page;
//   filmApiService.query = searchQuery;
//   return filmApiService.insertGenresToSearch();
// }