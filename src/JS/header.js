import getRefs from './getRefs';
import API from './apiServiсe';
import filmsTpl from '../templates/films-gallery-markup.hbs';
import debounce from 'lodash.debounce';



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

// const API = new NewApiServiceSearch();


refs.input.addEventListener('input',  debounce(e => {
    onSearch(e);
  }, 500),);



function onSearch(e) {
  e.preventDefault();
  onClear(); 
  const searchQuery = e.target.value ;
  refs.errorMessage.classList.add('is-hidden')
    if (searchQuery === '') {
        onFetchError()
        refs.pagination.classList.add('is-hidden')
    }
      API.SearchVideo(searchQuery)
    .then(data => {
    //   if (!data) {
    //   return;
    //   } else {
    //     if (data.Array < 20) {
    //       refs.pagination.classList.add('is-hidden')          
    //     } else {
    //       if (data.Array === 0) {            
    //         onFetchError()
    //       } else {
                
    //     }
          
    //   }         
    // }
     console.log(data)
     renderFilmsList(data)       
       
  })
  // .catch(onFetchError());  
 
  
}    




      
 function renderFilmsList(list) {
                const markUp = filmsTpl(list)
                refs.gallery.innerHTML = markUp;
            }

 function onClear () {
  refs.gallery.innerHTML = ' ';
}
 
function onFetchError(){
// alert ('Введите коректные данные');
refs.errorMessage.classList.remove('is-hidden')
}