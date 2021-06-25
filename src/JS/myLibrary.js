// 1. Импорты

import filmsTpl from '../templates/films-gallery-markup.hbs';
import getRefs from '../JS/getRefs.js'

const libraryRefs = getRefs()

const galleryList = document.querySelector('.gallery-list');

// 2. Тестовый фетч

// function testFetch(id) {
//   return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
//     .then(response => response.json())
// }

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

// libraryRefs.btnLibrary.addEventListener('click', () => {
//   testWatchedID.forEach((value) => {
//     testFetch(value)
//       .then(data => addToWatched(data))
//   })

//   testQueueID.forEach((value) => {
//     testFetch(value)
//       .then(data => addToQueue(data))
//   })
// })

// toWatchedBtn.addEventListener('click', () => {
//   testWatchedID.forEach((value) => {
//     testFetch(value)
//       .then(data => addToWatched(data))
//   })
// })

// toQueueBtn.addEventListener('click', () => {
//   testQueueID.forEach((value) => {
//     testFetch(value)
//       .then(data => addToQueue(data))
//   })
// })

// 4. Вывод готовой подборки

function createWatchedGallery() {
  galleryList.innerHTML = filmsTpl(JSON.parse(localStorage.getItem('watched')))
  libraryRefs.btnWatched.classList.add('current')
  libraryRefs.btnQueue.classList.remove('current')
}

function createQueueGallery() {
  galleryList.innerHTML = filmsTpl(JSON.parse(localStorage.getItem('queue')))
  libraryRefs.btnQueue.classList.add('current')
  libraryRefs.btnWatched.classList.remove('current')
}

libraryRefs.btnLibrary.addEventListener('click', createWatchedGallery)

libraryRefs.btnWatched.addEventListener('click', createWatchedGallery)

libraryRefs.btnQueue.addEventListener('click', createQueueGallery)

