const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b65045320802bba8dd2152de82b219b4';

export default class VideoApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchVideo() {
    const responseUrl = await fetch(
        `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`
    );

    const { hits: video } = await responseUrl.json();
    this.incrementPage();

    return video;
  }
  

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}