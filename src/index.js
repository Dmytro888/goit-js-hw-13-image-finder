import './css/styles.css';
import { default as apiService } from './js/apiService.js';

const formInput = document.querySelector('#search-form');
const galleryRef = document.querySelector('.gallery');
const loadBtnRef = document.querySelector('button');

function addImg () {
  apiService.pageIncrement();
  apiService.featchImg();
}

function getImage (event) {
  event.preventDefault();
  galleryRef.innerHTML = '';
  apiService.page = 1;
  apiService.searchQuery = event.target.query.value;
  apiService.featchImg();
  loadBtnRef.removeAttribute('hidden');
  loadBtnRef.classList.add('load');
}

formInput.addEventListener('submit', getImage);
loadBtnRef.addEventListener('click', addImg);

//дополнительное задание сделал на скорую руку

window.document.body.addEventListener('click', event => {
  if (event.target.nodeName === 'IMG') {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="backdrop"> <img src="${event.target.dataset.img}" alt="img">
    </div>`,
    );
  } else if (document.body.querySelector('.backdrop')) {
    document.body.removeChild(document.body.querySelector('.backdrop'));
  }
});
