import vitaliy from '../images/students/vitaliy-yakovlev.jpg';
import oleksii from '../images/students/alex.jpg';
import roma from '../images/students/roman-yakimovich.jpg';
import alexander from '../images/students/alexander-bednichenko.jpg';
import vlad from '../images/students/Vlad.jpg';
import konstantin from '../images/students/konstantin-halkin.jpg';
import denis from '../images/students/denis-usov.jpg';
import dima from '../images/students/Dima.jpg';

const listStudents = [
  {
    name: 'Vladyslav',
    work: 'Team lead',
    lastname: 'Hrytsenko',
    images: vlad,
  },
  {
    name: 'Oleksii',
    work: 'Scrum Master',
    lastname: 'Protasov',
    images: oleksii,
  },
  {
    name: 'Vitaliy',
    work: 'Developer',
    lastname: 'Yakovlev',
    images: vitaliy,
  },
  {
    name: 'Roman',
    work: 'Developer',
    lastname: 'Yakimovich',
    images: roma,
  },
  {
    name: 'Alexander',
    work: 'Developer',
    lastname: 'Bednichenko',
    images: alexander,
  },
  {
    name: 'Denis',
    work: 'Developer',
    lastname: 'Usov',
    images: denis,
  },
  {
    name: 'Konstantin',
    work: 'Developer',
    lastname: 'Halkin',
    images: konstantin,
  },
  {
    name: 'Dmitriy',
    work: 'Developer',
    lastname: '',
    images: dima,
  },
];

const refs = {
  divModal: document.querySelector('.js-teambox'),
  divOverlay: document.querySelector('.teambox-overlay'),
  buttonClose: document.querySelector('[data-action = close-teambox]'),
  link: document.querySelector('div div p a'),
  upBtn: document.querySelector('#myBtn'),
};

refs.link.addEventListener('click', openModalTeam);
refs.buttonClose.addEventListener('click', closeModalTeam);
refs.divOverlay.addEventListener('click', onCloseMauseModal);

function openModalTeam(e) {
  e.preventDefault();
  refs.divModal.classList.add('is-open');
  refs.upBtn.classList.add('is-hidden');

  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', closeModaEsc);

  const teamMarcup = listMarkupTeamDeveloper(listStudents);
  document.querySelector('.team-pic-box').insertAdjacentHTML('beforeend', teamMarcup);
}

function closeModalTeam() {
  const currentActiveClassModal = document.querySelector('.js-teambox.is-open');

  if (currentActiveClassModal) {
    currentActiveClassModal.classList.remove('is-open');

    refs.upBtn.classList.remove('is-hidden');

    document.body.style.overflow = 'scroll';

    document.querySelector('.team-pic-box').innerHTML = '';
  }
}

function closeModaEsc(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    closeModalTeam();
    window.removeEventListener('keydown', closeModaEsc);
  }
}

function onCloseMauseModal(e) {
  if (e.target === e.currentTarget) {
    closeModalTeam();
  }
}

function listMarkupTeamDeveloper(listStudent) {
  return listStudent
    .map(({ name, work, lastname, images }) => {
      return ` <li class="team-card-list">
        <div class="team-box-thumb">
        <img class="team-box-img" src="${images}" alt="${name} " />
        <p class="team-link-overlay-text">${name} ${lastname} ${work}</p>
        </div>
      </li> `;
    })
    .join('');
}
