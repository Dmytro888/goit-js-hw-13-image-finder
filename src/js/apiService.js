import itemTemplate from '../template/img-temp.hbs';

const galleryRef = document.querySelector('.gallery');

export default {
  page: 1,
  apiKey: '20194224-dc6981f3af6cee6aa68ee0a6f',
  imgQuantity: 12,
  baseUrl: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',
  searchQuery: null,

  featchImg (searchQuery) {
    fetch(
      `${this.baseUrl}&q=${this.searchQuery}&page=${this.page}&per_page=${this.imgQuantity}&key=${this.apiKey}`,
    )
      .then(response => response.json())
      .then(data => {
        this.markup(data.hits);
        this.scroll();
      });
  },

  pageIncrement () {
    this.page += 1;
  },
  markup (apiData) {
    const markup = itemTemplate(apiData);
    galleryRef.insertAdjacentHTML('beforeend', markup);
  },
  scroll () {
    if (this.page > 1) {
      window.scrollBy({
        top: window.innerHeight - 100,
        behavior: 'smooth',
      });
    }
  },
};
