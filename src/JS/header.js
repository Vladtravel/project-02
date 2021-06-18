import getRefs from './getRefs';

const refs = getRefs();

refs.btnHome.addEventListener('click', clickHome);
refs.btnLibrary.addEventListener('click', clickLibrary);

function clickHome() {
    clearVisuallyHidden();
    clearActiveStatus();
    clearImgHeader();
    refs.myLibraryBtn.classList.add('is-hidden');
    refs.btnHome.classList.add('is-active');
    refs.btnLibrary.classList.add('is-deactive');
    refs.header.classList.add('img-home')
}

function clickLibrary() {
    clearVisuallyHidden();
    clearActiveStatus();
    clearImgHeader();
    refs.input.classList.add('is-hidden');
    refs.btnLibrary.classList.add('is-active');
    refs.btnHome.classList.add('is-deactive');
    refs.header.classList.add('img-library')
    
}

function clearVisuallyHidden() {
    refs.input.classList.remove('is-hidden');
    refs.myLibraryBtn.classList.remove('is-hidden')
}
function clearActiveStatus() {
   refs.btnLibrary.classList.remove('is-deactive');
    refs.btnLibrary.classList.remove('is-active');
    refs.btnHome.classList.remove('is-active');
    refs.btnHome.classList.remove('is-deactive') 
}

function clearImgHeader() {
    refs.header.classList.remove('img-home')
    refs.header.classList.remove('img-library')
}