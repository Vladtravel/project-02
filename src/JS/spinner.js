const spinnerRef = document.querySelector('.preloader');

const spinner = {
  show() {
    spinnerRef.classList.remove('is-hidden');
  },
  hide() {
    setTimeout(() => {
      spinnerRef.classList.add('is-hidden');
    }, 550);
  },
};

export default spinner;
