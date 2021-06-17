import './sass/main.scss';
const r = fetch(
  'https://api.themoviedb.org/3/discover/movie?api_key=b65045320802bba8dd2152de82b219b4&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
)
  .then(response => response.json())
  .then(data => console.log(data));
