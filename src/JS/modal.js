import filmMarkup from '../templates/one-film-markup.hbs';
import NewModalService from './apiModal';

const containerModal = document.querySelector('.container-card');
const openOneFilm = document.querySelector('.gallery-list');

openOneFilm.addEventListener('click', openModal);

const ApiModal = new NewModalService();

function openModal(e) {
  console.log(e.target.dataset.id);
  ApiModal.query = e.target.dataset.id;

  // toggleModal();

  ApiModal.fetchImage().then(imageMarkup);
}

function imageMarkup(data) {
  containerModal.insertAdjacentHTML('beforeend', filmMarkup(data));
  const closeModalBtn = document.querySelector('.close-modal');
  closeModalBtn.addEventListener('click', toggleModal);
}

function toggleModal() {
  const modal = document.querySelector('[data-modal]');
  modal.classList.toggle('is-hidden');
}
