export default class ApiModal {
  constructor() {
    this.searchId = '';
  }

  fetchImage() {
    const url = `https://api.themoviedb.org/3/movie/${this.searchId}?api_key=b65045320802bba8dd2152de82b219b4&language=ru`;
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
