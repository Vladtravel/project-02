import filmMarkup from '../templates/one-film-markup.hbs';
import NewModalService from './apiModal';

// const refs = {
//   openModalBtn: document.querySelector('[data-modal-open]'),
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   backdrop: document.querySelector('[data-backdrop]'),
//   ,
// };

// refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);

// function toggleModal() {
//   refs.backdrop.classList.toggle('is-hidden');
// }

const containerModal = document.querySelector('.container-card');
const openOneFilm = document.querySelector('.gallery-list');

openOneFilm.addEventListener('click', openModal);

const ApiModal = new NewModalService();

function openModal(e) {
  console.log(e.target.dataset.id);
  ApiModal.query = e.target.dataset.id;

  // toggleModal();

  // function some() {
  //   const closeBtn = document.querySelector('.modal-close')
  //   closeBtn.addEventListener('click', closeModal)

  //   function closeModal(e) {
  //     console.log(some)
  //   }
  // }

  //

  ApiModal.fetchImage().then(imageMarkup);
}

function imageMarkup(data) {
  containerModal.insertAdjacentHTML('beforeend', filmMarkup(data));
}
