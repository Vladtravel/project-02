import getRefs from './getRefs';
import filmsTpl from '../templates/films-gallery-markup.hbs';
import debounce from 'lodash.debounce';
import VideoApiService from './apiServiceSearch';
import { createPagination } from './pagination';


const filmApiService = new VideoApiService();
const refs = getRefs();

refs.btnHome.addEventListener('click', clickHome);
refs.btnLibrary.addEventListener('click', clickLibrary);

function clickHome() {
  clearVisuallyHidden();
  clearActiveStatus();
  clearImgHeader();
  refs.myLibraryBtn.classList.add('is-hidden');
  refs.btnHome.classList.add('is-active');
  refs.btnLibrary.classList.add('is-deactive');
  refs.header.classList.add('img-home');
}

function clickLibrary() {
  clearVisuallyHidden();
  clearActiveStatus();
  clearImgHeader();
  refs.input.classList.add('is-hidden');
  refs.btnLibrary.classList.add('is-active');
  refs.btnHome.classList.add('is-deactive');
  refs.header.classList.add('img-library');
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
  }, 500),
);

function onSearch(e) {
  e.preventDefault();
  onClear();  
 filmApiService.query = e.target.value;
  console.log(filmApiService.query)
  refs.errorMessage.classList.add('is-hidden');
  if (filmApiService.query === '') {
    onFetchError();
    refs.pagination.classList.add('is-hidden');
  }
  filmApiService
    .insertGenresToSearch()
    .then(data => {
      if (!data) {
      return;
      } else {
        console.log(data)
        if (data.length < 20) {
          refs.pagination.classList.add('is-hidden')
           renderFilmsList(data)
        } else {
          if (data.length === 0) {
            return;
          } else {
              console.log(data);
              renderFilmsList(data);
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
  alert ('Введите коректные данные');
  refs.errorMessage.classList.remove('is-hidden');
}




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
