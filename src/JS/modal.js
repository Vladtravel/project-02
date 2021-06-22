import filmMarkup from '../templates/one-film-markup.hbs' 
import * as basicLightbox from 'basiclightbox'; 
import 'basiclightbox/dist/basicLightbox.min.css'; 
 
 
// import testFetch from './myLibrary.js' 
// (() => { 
//   const refs = { 
//     openModalBtn: document.querySelector('[data-modal-open]'), 
//     closeModalBtn: document.querySelector('[data-modal-close]'), 
//     backdrop: document.querySelector('[data-backdrop]') 
//   }; 
 
//   refs.openModalBtn.addEventListener('click', toggleModal); 
//   refs.closeModalBtn.addEventListener('click', toggleModal); 
 
//   function toggleModal() { 
//     refs.backdrop.classList.toggle('is-hidden'); 
//   } 
// })(); 
 
 
 
const openOneFilm = document.querySelector('.gallery-list'); 
 
openOneFilm.addEventListener('click', openModal); 
 
const API_KEY = 'b65045320802bba8dd2152de82b219b4' 
 
function fetchFilmsCardId(id) { 
  const url = https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}; 
  return fetch(url) 
    .then(response => response.json()) 
    .then(console.log) 
    .then(data => (console.log(data))) 
  // Ошибка тут! Нужно получить доступ к id того фильма на который кликаешь 
} 
 
function openModal(e) { 
  e.preventDefault(); 
 
  fetchFilmsCardId(e.target.dataset.id) 
    .then(data => { 
      if (e.target.nodeName !== 'IMG') return; 
 
      const markup = filmMarkup(data); 
      const modal = basicLightbox.create(markup); 
 
      modal.show(); 
 
      const closeBtn = document.querySelector('.modal-close'); 
      closeBtn.addEventListener('click', closeModal); 
 
      window.addEventListener('keydown', closeModalHandler); 
 
      function closeModalHandler(e) { 
        if (e.code === 'Escape') { 
          modal.close(); 
          window.removeEventListener('keydown', closeModalHandler); 
        } 
      } 
 
      function closeModal(e) { 
        modal.close(); 
        window.removeEventListener('keydown', closeModalHandler); 
      } 
 
//       //new Function 
    //   testFetch() 
      initStorageBtns(); 
    }) 
    .then(data => console.log(data)) 
    .then(data => {}) 
    .catch(error => { 
      console.log('oops!'); 
    }); 
} 
 
 
 
// console.log(fetchFilmsCardId()) 
 
 
 
 
 
 
// function filmCardMarkup(film) { 
//   filmMarkup.insertAdjacentHTML('beforeend', filmMarkup(film)); 
// } 
 
 
 
 
 
 
 
// modalBtn = document.querySelector('.modal-btn') 
 
 
// const r = fetch( 
//     'https://api.themoviedb.org/3/discover/movie?api_key=b65045320802bba8dd2152de82b219b4&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate', 
//   ) 
//     .then(response => response.json()) 
//     .then(data => console.log(data));