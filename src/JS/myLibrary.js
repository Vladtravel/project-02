// 1. Импорты

import filmsTpl from '../templates/films-gallery-markup.hbs';
import getRefs from '../JS/getRefs.js'

const libraryRefs = getRefs()

const galleryList = document.querySelector('.gallery-list');

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

