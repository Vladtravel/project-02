import getRefs from './getRefs';
import filmsTpl from '../templates/films-gallery-markup.hbs';
import debounce from 'lodash.debounce';
import VideoApiService from './apiServiceSearch';
import { createPagination } from './pagination';
import { onClickTheme } from './toolbar';

const filmApiService = new VideoApiService();
const refs = getRefs();

refs.btnHome.addEventListener('click', clickHome);
refs.btnLibrary.addEventListener('click', clickLibrary);
refs.logo.addEventListener('click', clickLogo);

function clickLogo() {
  clearVisuallyHidden();
  clearActiveStatus();
  clearImgHeader();
  refs.myLibraryBtn.classList.add('is-hidden');
  refs.btnHome.classList.add('is-active');
  refs.btnLibrary.classList.add('is-deactive');
  refs.header.classList.add('img-home');
  refs.pagination.classList.remove('hide');
  refs.input.value = '';
  refs.errorMessage.classList.add('is-hidden')
}

function clickHome() {
  clearVisuallyHidden();
  clearActiveStatus();
  clearImgHeader();
  refs.myLibraryBtn.classList.add('is-hidden');
  refs.btnHome.classList.add('is-active');
  refs.btnLibrary.classList.add('is-deactive');
  refs.header.classList.add('img-home');
  refs.pagination.classList.remove('hide');
  refs.input.value = '';
  refs.errorMessage.classList.add('is-hidden')
}

function clickLibrary() {
  clearVisuallyHidden();
  clearActiveStatus();
  clearImgHeader();
  refs.input.classList.add('is-hidden');
  refs.btnLibrary.classList.add('is-active');
  refs.btnHome.classList.add('is-deactive');
  refs.header.classList.add('img-library');
  refs.input.value = '';
  refs.pagination.classList.add('hide');
  refs.errorMessage.classList.add('is-hidden')
}

function clearVisuallyHidden() {
  refs.input.classList.remove('is-hidden');
  refs.myLibraryBtn.classList.remove('is-hidden');
}
function clearActiveStatus() {
  refs.btnLibrary.classList.remove('is-deactive');
  refs.btnLibrary.classList.remove('is-active');
  refs.btnHome.classList.remove('is-active');
  refs.btnHome.classList.remove('is-deactive');
}

function clearImgHeader() {
  refs.header.classList.remove('img-home');
  refs.header.classList.remove('img-library');
}

// Поиск по ключевому слову

refs.input.addEventListener(
  'input',
  debounce(e => {
    onSearch(e);
  }, 1000),
);

function onSearch(e) {
  e.preventDefault();
  onClear();
  
  filmApiService.query = e.target.value;
  filmApiService.pageNum = 1;
  refs.pagination.classList.remove('is-hidden');
  refs.errorMessage.classList.add('is-hidden');
  if (filmApiService.query === '') {
    refs.pagination.classList.add('is-hidden');
    return;
  }

  filmApiService
    .insertGenresToSearch()
    .then(data => {
      if (!data) {
        return;
      } else {
        if (data.length === 0) {
          onFetchError();
        } else {
          if (data.length < 20) {
            refs.pagination.classList.add('is-hidden');
            renderFilmsList(data);
            onClickTheme();
          } else {
            renderFilmsList(data);
            onClickTheme();
            fetchDataOfSearchFilms();
          }
        }
      }
    })
    .catch(err => {
      onFetchError(err);
    });
}

function renderFilmsList(list) {
  const markUp = filmsTpl(list);
  refs.gallery.innerHTML = markUp;
}

function onClear() {
  refs.gallery.innerHTML = ' ';
}

function onFetchError() {
  refs.errorMessage.classList.remove('is-hidden');
}

// Pagination-----------------------------------------

function fetchSearchFilmsByPage(page) {
  filmApiService.pageNum = page;

  return filmApiService.insertGenresToSearch();
}

function fetchDataOfSearchFilms() {
  filmApiService.fetchFilmsPagesQ().then(results => {
    createPagination(results.total_pages, results.results, displayListQ);
  });
}

function displayListQ(wrapper, page) {
  wrapper.innerHTML = '';
  fetchSearchFilmsByPage(page).then(renderFilmsList);
}
