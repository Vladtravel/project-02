import getRefs from './getRefs';

const refs = getRefs();
refs.btnSign.addEventListener('click', openModalSign)
refs.btnCloseSign.addEventListener('click', closeByBtn)

function openModalSign() {
    refs.backdropSign.classList.remove('is-hidden')
    refs.body.classList.add('remove-scroll')
}

function closeByBtn() {
  const modal = document.querySelector('[data-sign]');
  modal.classList.add('is-hidden');
  bodyEl.classList.remove('remove-scroll');
}