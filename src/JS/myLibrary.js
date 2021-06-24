import filmsTpl from '../templates/films-gallery-markup.hbs';
import getRefs from '../JS/getRefs.js'

const libraryRefs = getRefs()

const galleryList = document.querySelector('.gallery-list');

// 3. Сохранение просмотренного в localStorage

// function addToWatched(movieData) {
//   let watched = [];

//   if (localStorage.getItem('watched')) {
//     watched = [...JSON.parse(localStorage.getItem('watched'))];
//   }

//   watched.push(movieData)

//   localStorage.setItem('watched', JSON.stringify(watched))
// }

// function addToQueue(movieData) {
//   let queue = [];

//   if (localStorage.getItem('queue')) {
//     queue = [...JSON.parse(localStorage.getItem('queue'))];
//   }

//   queue.push(movieData)

//   localStorage.setItem('queue', JSON.stringify(queue))
// }


// 4. Вывод готовой подборки

libraryRefs.btnWatched.addEventListener('click', () => {
  galleryList.innerHTML = filmsTpl(JSON.parse(localStorage.getItem('watched')))
})

libraryRefs.btnQueue.addEventListener('click', () => {
  galleryList.innerHTML = filmsTpl(JSON.parse(localStorage.getItem('queue')))
})

