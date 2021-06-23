// 1. Импорты

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '612ad9e57f61526bfd55d457eca2466c';

const testWatchedID = [508943, 602063, 581726]
const testQueueID = [423108, 88052]

import filmsTpl from '../templates/films-gallery-markup.hbs';
import getRefs from '../JS/getRefs.js'

const libraryRefs = getRefs()

const galleryList = document.querySelector('.gallery-list')

// 2. Тестовый фетч

function testFetch(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then(response => response.json())
}

// 3. Сохранение просмотренного в localStorage

const watched = []

function addToWatched(movie) {
  testFetch(movie)
    .then(data => watched.push(data))
    .then(() => {
      localStorage.setItem('watched', JSON.stringify(watched))
    })
}

const queue = []

function addToQueue(movie) {
  testFetch(movie)
    .then(data => queue.push(data))
    .then(() => {
      localStorage.setItem('queue', JSON.stringify(queue))
    })
}

testWatchedID.forEach((value) => {
  addToWatched(value)
})

testQueueID.forEach((value) => {
  addToQueue(value)
})

// 4. Вывод готовой подборки

libraryRefs.btnWatched.addEventListener('click', () => {
  galleryList.innerHTML = filmsTpl(JSON.parse(localStorage.getItem('watched')))
})

libraryRefs.btnQueue.addEventListener('click', () => {
  galleryList.innerHTML = filmsTpl(JSON.parse(localStorage.getItem('queue')))
})

