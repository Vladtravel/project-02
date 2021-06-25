const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b65045320802bba8dd2152de82b219b4';

import spinner from './spinner';

export default class VideoApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchVideo() {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.results;
      })
      .finally(() => {
        spinner.hide();
      });
  }
  fetchFilmsPagesQ() {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url).then(response => response.json());
  }

  fetchGenresF() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ genres }) => {
        return genres;
      });
  }

  insertGenresToSearch() {
    return this.fetchVideo().then(data => {
      return this.fetchGenresF().then(genresList => {
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date ? movie.release_date.slice(0, 4) : '',
          first_air_date: movie.first_air_date ? movie.first_air_date.slice(0, 4) : '',
          genres: movie.genre_ids
            ? movie.genre_ids
                .map(id => genresList.filter(el => el.id === id))
                .slice(0, 2)
                .flat()
            : 'watch the movie and decide',
        }));
      });
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  get pageNum() {
    return this.page;
  }
  set pageNum(newPage) {
    this.page = newPage;
  }
}
