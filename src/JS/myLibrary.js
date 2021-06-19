// 1. Импорты

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '612ad9e57f61526bfd55d457eca2466c';

const testWatchedID = [508943, 84958, 602063, 581726]
const testQueueID = [581644, 96677]

import filmsTpl from '../templates/films-gallery-markup.hbs';

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
      console.log(watched)
      localStorage.setItem('watched', JSON.stringify(watched))
      console.log(localStorage.getItem('watched'))
    })
}

const queue = []

function addToQueue(movie) {
  testFetch(movie)
    .then(data => queue.push(data))
    .then(() => {
      console.log(queue)
      localStorage.setItem('queue', JSON.stringify(queue))
      console.log(localStorage.getItem('queue'))
    })
}

testWatchedID.forEach((value) => {
  addToWatched(value)
})

testQueueID.forEach((value) => {
  addToQueue(value)
})


// 4. Вывод готовой подборки

