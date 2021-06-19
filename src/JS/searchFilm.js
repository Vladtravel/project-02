import VideoApiService from './apiServese';
import cardImeges from '../templates/templates.hbs';

const formInput = document.querySelector('.header-form');
const filmApiServ = new VideoApiService();

formInput.addEventListener('submit', searchingFilm);


