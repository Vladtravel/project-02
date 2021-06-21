const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b65045320802bba8dd2152de82b219b4';

function SearchVideo(searchQuery) {
return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`).then(response => 
    response.json(),
);
}

export default { SearchVideo };