const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b65045320802bba8dd2152de82b219b4';

function SearchVideo(searchQuery) {
return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`).then(response => 
    response.json(),
) 
      .then(data => {
        return data.results;
      })
}

export default { SearchVideo };

// export default class NewApiServiceSearch {
//   constructor() {
//       this.page = 1;
//       this.searchQuery='';
//   }

//   fetchFilmsSearch() {
//     const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.searchQuery}`;
    

//     return fetch(url)
//       .then(response => {
//         const respVar = response.json();
//         // console.log(respVar)
//         return respVar;
        
//       })
//       .then(data => {
//         return data.results;
//       });
//   }

//   fetchGenres() {
//     const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
//     return fetch(url)
//       .then(response => response.json())
//       .then(({ genres }) => {
//         return genres;
//       });
//   }

//   insertGenresToFilm() {
//     return this.fetchFilmsSearch().then(data => {
//       return this.fetchGenres().then(genresList => {
//         return data.map(movie => ({
//           ...movie,
//           release_date: movie.release_date ? movie.release_date.slice(0, 4) : '',
//           first_air_date: movie.first_air_date ? movie.first_air_date.slice(0, 4) : '',
//           genres: movie.genre_ids
//             ? movie.genre_ids
//                 .map(id => genresList.filter(el => el.id === id))
//                 .slice(0, 2)
//                 .flat()
//             : 'watch the movie and decide',
//         }));
//       });
//     });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   decrementPage() {
//     this.page -= 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   fetchFilmsPages() {
//     const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.pege}&include_adult=false&query=${this.searchQuery}`;
//     return fetch(url).then(response => {
//       return response.json();
//     });
//   }

//   get pageNum() {
//     return this.page;
//   }

//   set pageNum(newPage) {
//     this.page = newPage;
//     }
    
//     get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }