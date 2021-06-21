// import { alert, defaultModules, error } from '@pnotify/core';
// import * as PNotifyMobile from '@pnotify/mobile';

import getRefs from './getRefs';
import API from './apiServiсe';
import filmsTpl from '../templates/search.hbs';
// import debounce from 'lodash.debounce';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css';


// defaultModules.set(PNotifyMobile, {});


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
    refs.header.classList.add('img-home')
}

function clickLibrary() {
    clearVisuallyHidden();
    clearActiveStatus();
    clearImgHeader();
    refs.input.classList.add('is-hidden');
    refs.btnLibrary.classList.add('is-active');
    refs.btnHome.classList.add('is-deactive');
    refs.header.classList.add('img-library')

}

function clearVisuallyHidden() {
    refs.input.classList.remove('is-hidden');
    refs.myLibraryBtn.classList.remove('is-hidden')
}
function clearActiveStatus() {
    refs.btnLibrary.classList.remove('is-deactive');
    refs.btnLibrary.classList.remove('is-active');
    refs.btnHome.classList.remove('is-active');
    refs.btnHome.classList.remove('is-deactive')
}

function clearImgHeader() {
    refs.header.classList.remove('img-home')
    refs.header.classList.remove('img-library')
}

// Поиск по ключевому слову


refs.input.addEventListener('input', onSearch)
// refs.input.addEventListener('input',  _debounce(e => {
//     onSearch(e);
//   }, 500),);

function onSearch(e) {
  e.preventDefault();
  onClear(); 
  const searchQuery = e.target.value ;
  
  API.SearchVideo(searchQuery)
  .then(data => {     
      console.log(data)         
     renderFilmsList(data)    
  })
  .catch(onFetchError);   
}    
      
 function renderFilmsList(list) {
                const markUp = filmsTpl(list)
                refs.gallery.innerHTML = markUp;
            }

 function onClear () {
  refs.gallery.innerHTML = ' ';
}
 
function onFetchError(){
alert ('Введите коректные данные');
}