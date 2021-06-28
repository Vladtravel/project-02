const appBtn = document.querySelector('#myBtn');

appBtn.addEventListener('click', topFunction);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    appBtn.style.display = 'block';
  } else {
    appBtn.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
