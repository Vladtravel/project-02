import VideoApiService from './apiServese';
import cardImeges from '../templates/templates.hbs';

const galleryList = document.querySelector('.gallery-list');
const formInput = document.querySelector('.header-form');
const filmApiService = new VideoApiService();

formInput.addEventListener('submit', searchingFilm);

function searchingFilm(e) {
    e.preventDefault();
  
    const form = e.currentTarget;
    const input = form.elements.query;
  
    // clearListItems();
  
    // filmApiService.resetPage();
    filmApiService.searchQuerry = input.value;
  
    filmApiService.fetchVideo().then(hits => {
        buildListItemsTemplate(hits);
      console.log()
    });
    input.value = '';

  }
  
  
  function buildListItemsTemplate(items) {
    return galleryList.insertAdjacentHTML('beforeend', filmsTpl(films));
  }



