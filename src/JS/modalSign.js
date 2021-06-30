import getRefs from './getRefs';

const refs = getRefs();

refs.btnSign.addEventListener('click', openModalSign)
refs.btnCloseSign.addEventListener('click', closeByBtn)
refs.btnSubmit.addEventListener('click', closeByBtn)
refs.btnRegister.addEventListener('click', openFormRegister)
refs.btnCreateAccount.addEventListener('click', createAccount)


function openModalSign() {
  refs.backdropSign.classList.remove('is-hidden');
  refs.body.classList.add('remove-scroll');
}

function closeByBtn() {
  const modal = document.querySelector('[data-sign]');
  modal.classList.add('is-hidden');
  refs.body.classList.remove('remove-scroll');
}


function openFormRegister() {
  refs.formAuthorization.classList.add('is-hidden');
  refs.formRegister.classList.remove('is-hidden')
}

function createAccount() {
  refs.formAuthorization.classList.remove('is-hidden');
  refs.formRegister.classList.add('is-hidden')
}


