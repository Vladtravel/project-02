const API_KEY = '612ad9e57f61526bfd55d457eca2466c';

export default class ApiModal {
  constructor() {
    this.searchId = '';
  }

  fetchImage() {
    const url = `https://api.themoviedb.org/3/movie/${this.searchId}?api_key=${API_KEY}&language=ru`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }

  get query() {
    return this.searchId;
  }

  set query(NewId) {
    this.searchId = NewId;
  }
}
