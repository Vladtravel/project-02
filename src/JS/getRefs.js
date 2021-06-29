export default function getRefs() {
  return {
    btnHome: document.querySelector('[data-home]'),
    btnLibrary: document.querySelector('[data-library]'),
    btnWatched: document.querySelector('[data-watched]'),
    btnQueue: document.querySelector('[data-queue]'),
    input: document.querySelector('[data-input]'),
    myLibraryBtn: document.querySelector('[data-button-library]'),
    header: document.querySelector('[data-header]'),
    logo: document.querySelector('.header-logo'),
    gallery: document.querySelector('.gallery-list'),
    errorMessage: document.querySelector('[data-error]'),
    pagination: document.querySelector('.pagination__container'),
    checkBox: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body'),
    filmTitle: document.querySelectorAll('.film-title','.film-title-dark'),
  };
}
