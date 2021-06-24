import filmMarkup from '../templates/one-film-markup.hbs';
import NewModalService from './apiModal';

const containerModal = document.querySelector('.container-card');
const bodyEl = document.querySelector('body')
const openOneFilm = document.querySelector('.gallery-list');

openOneFilm.addEventListener('click', openModal);

const ApiModal = new NewModalService();

function openModal(e) {
  console.log(e);
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  ApiModal.query = e.target.dataset.id;

  bodyEl.classList.add('remove-scroll');

  ApiModal.fetchImage().then(imageMarkup);
}

function imageMarkup(data) {
  containerModal.innerHTML = '';
  containerModal.insertAdjacentHTML('beforeend', filmMarkup(data));
  const modal = document.querySelector('[data-modal]');
  modal.classList.remove('is-hidden');
  modal.classList.add('modal-scroll');

  const closeModalBtn = document.querySelector('.close-modal');
  closeModalBtn.addEventListener('click', toggleModal);

  const backdropEl = document.querySelector('.backdrop');
  backdropEl.addEventListener('click', toggleModal);

  window.addEventListener('keydown', closeModalHandler);

  libraryButtons(data);
}

function closeModalHandler(e) {
  if (e.code === 'Escape') {
    toggleModal();
  }
}

function toggleModal() {
  const modal = document.querySelector('[data-modal]');

  modal.classList.add('is-hidden');
  bodyEl.classList.remove('remove-scroll');
}

// Реализация кнопок для MyLibrary

function libraryButtons(movie) {
  const toWatchedBtn = document.querySelector('.add-to-watched');
  const toQueueBtn = document.querySelector('.add-to-queue');

  let currentMovie = movie;
  let watched = [];
  let queue = [];

  if (localStorage.getItem('watched')) {
    watched = [...JSON.parse(localStorage.getItem('watched'))];
  }
  
  if (localStorage.getItem('queue')) {
    queue = [...JSON.parse(localStorage.getItem('queue'))];
  }

  if (watched.find(el => el.id === currentMovie.id)) {
    toWatchedBtn.disabled = true;
    toWatchedBtn.classList.add('is-hidden')

    toQueueBtn.disabled = true;
    toQueueBtn.classList.add('is-hidden')
  } else {
    toWatchedBtn.disabled = false;
    toWatchedBtn.classList.remove('is-hidden')

    toWatchedBtn.addEventListener('click', () => {
      watched.push(currentMovie)
      localStorage.setItem('watched', JSON.stringify(watched))
    })

    if (queue.find(el => el.id === currentMovie.id)) {
      toQueueBtn.disabled = true;
      toQueueBtn.classList.add('is-hidden')
    } else {
      toQueueBtn.disabled = false;
      toQueueBtn.classList.remove('is-hidden')

      toQueueBtn.addEventListener('click', () => {
        queue.push(currentMovie)
        localStorage.setItem('queue', JSON.stringify(queue))
      })
    }
  }
}
