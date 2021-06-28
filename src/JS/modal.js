import filmMarkup from '../templates/one-film-markup.hbs';
import NewModalService from './apiModal';

const containerModal = document.querySelector('.container-card');
const bodyEl = document.querySelector('body');
const openOneFilm = document.querySelector('.gallery-list');

openOneFilm.addEventListener('click', openModal);

const ApiModal = new NewModalService();

function openModal(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  ApiModal.query = e.target.dataset.id;

  ApiModal.fetchImage().then(imageMarkup);

  bodyEl.classList.add('remove-scroll');
}

function imageMarkup(data) {
  containerModal.innerHTML = '';
  containerModal.insertAdjacentHTML('beforeend', filmMarkup(data));
  const modal = document.querySelector('[data-modal]');
  modal.classList.remove('is-hidden');

  const closeModalBtn = document.querySelector('.close-modal');
  closeModalBtn.addEventListener('click', closeByBtn);

  const backdropEl = document.querySelector('.backdrop');
  backdropEl.addEventListener('click', toggleModal);

  libraryButtons(data);
}

window.addEventListener('keydown', toggleModal);

function closeByBtn() {
  const modal = document.querySelector('[data-modal]');
  modal.classList.add('is-hidden');
  bodyEl.classList.remove('remove-scroll');
}

function toggleModal(e) {
  if (e.currentTarget === e.target || e.code === 'Escape') {
    const modal = document.querySelector('[data-modal]');
    modal.classList.add('is-hidden');
    bodyEl.classList.remove('remove-scroll');
  }
}

// Реализация кнопок для MyLibrary

function libraryButtons(movie) {
  // Объявление переменных
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

  // Управление кнопкой Add to watched
  if (watched.find(el => el.id === currentMovie.id)) {
    removeWatchedBtn();
  } else {
    addWatchedBtn();
  }

  toWatchedBtn.addEventListener('click', () => {
    if (watched.find(el => el.id === currentMovie.id)) {
      watched = watched.filter(e => e.id !== currentMovie.id);
      localStorage.setItem('watched', JSON.stringify(watched));

      addWatchedBtn();
    } else {
      watched.push(currentMovie);
      localStorage.setItem('watched', JSON.stringify(watched));

      if (queue.find(el => el.id === currentMovie.id)) {
        queue = queue.filter(e => e.id !== currentMovie.id);
        localStorage.setItem('queue', JSON.stringify(queue));
        addQueueBtn();
      }

      removeWatchedBtn();
    }
  });

  // Управление кнопкой Add to queue
  if (queue.find(el => el.id === currentMovie.id)) {
    removeQueueBtn();
  } else {
    addQueueBtn();
  }

  toQueueBtn.addEventListener('click', () => {
    if (queue.find(el => el.id === currentMovie.id)) {
      queue = queue.filter(e => e.id !== currentMovie.id);
      localStorage.setItem('queue', JSON.stringify(queue));

      addQueueBtn();
    } else {
      queue.push(currentMovie);
      localStorage.setItem('queue', JSON.stringify(queue));

      if (watched.find(el => el.id === currentMovie.id)) {
        watched = watched.filter(e => e.id !== currentMovie.id);
        localStorage.setItem('watched', JSON.stringify(watched));
        addWatchedBtn();
      }

      removeQueueBtn();
    }
  });

  function addWatchedBtn() {
    toWatchedBtn.classList.add('deactivated-btn');
    toWatchedBtn.classList.remove('activated-btn');
    toWatchedBtn.textContent = 'Add to watched';
  }

  function removeWatchedBtn() {
    toWatchedBtn.classList.add('activated-btn');
    toWatchedBtn.classList.remove('deactivated-btn');
    toWatchedBtn.textContent = 'Remove from watched';
  }

  function addQueueBtn() {
    toQueueBtn.classList.add('deactivated-btn');
    toQueueBtn.classList.remove('activated-btn');
    toQueueBtn.textContent = 'Add to queue';
  }

  function removeQueueBtn() {
    toQueueBtn.classList.add('activated-btn');
    toQueueBtn.classList.remove('deactivated-btn');
    toQueueBtn.textContent = 'Remove from queue';
  }
}
