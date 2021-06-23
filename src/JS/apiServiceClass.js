const API_KEY = '612ad9e57f61526bfd55d457eca2466c';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class NewApiServiceTrend {
  constructor() {
    this.page = 1;
  }

  fetchFilms() {
    const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${this.page}`;

    return fetch(url)
      .then(response => {
        const respVar = response.json();
        // console.log(respVar)
        return respVar;
      })
      .then(data => {
        return data.results;
      });
  }

  fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ genres }) => {
        return genres;
      });
  }

  insertGenresToFilm() {
    return this.fetchFilms().then(data => {
      return this.fetchGenres().then(genresList => {
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

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  resetPage() {
    this.page = 1;
  }

  fetchFilmsPages() {
    const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${this.page}`;
    return fetch(url).then(response => {
      return response.json();
    });
  }

  get pageNum() {
    return this.page;
  }

  set pageNum(newPage) {
    this.page = newPage;
  }
}
