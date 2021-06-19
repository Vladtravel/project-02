
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '612ad9e57f61526bfd55d457eca2466c';

const testWatchedID = [508943, 84958, 602063, 581726]
const testQueueID = [581644, 96677]

import filmsTpl from '../templates/films-gallery-markup.hbs';

function testFetch(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then(response => response.json())
}

const watched = []
const queue = []

function addToWatched() {

}

function addToQueue() {
  
}

testWatchedID.forEach((id) => {
  testFetch(id)
    .then(data => watched.push(data))
    .then(() => {
      console.log(watched)
      localStorage.setItem('watched', JSON.stringify(watched))
      console.log(localStorage.getItem('watched'))
    })
    
})

console.log(watched)

localStorage.setItem('watched', JSON.stringify(watched))

console.log(localStorage.getItem('watched'))

