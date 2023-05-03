import axios from 'axios';

// `https://api.themoviedb.org/3/movie/id?api_key=key`; ok
// `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}` ok
// `https://api.themoviedb.org/3/search/movie?api_key=key&language=en-US&query=movie&page=1`ok
// `https://api.themoviedb.org/3/trending/movie/day?api_key=key`;
// https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const getEndPoint = (path, movieId) => {
  switch (path) {
    case 'trending':
      return '/trending/movie/day';
    case 'movieInfo':
      return `/movie/${movieId}`;
    case 'cast':
      return `/movie/${movieId}/credits`;
    case 'reviews':
      return `/movie/${movieId}/reviews`;
    case 'searchMovie':
      return `/search/movie`;
    default:
      console.log('default');
  }
};

const fetchMovieData = async (endPoint, query = '') => {
  const response = axios.get(`${endPoint}`, {
    params: {
      api_key: '326ecd742c922271411e34618fb1e345',
      language: 'en-US',
      query: query,
      page: 1,
      //   include_adult: false,
    },
  });

  return response;
};

const fetchSearch = async query => {
  const response = axios.get(
    `search/movie?api_key=326ecd742c922271411e34618fb1e345&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return response;
};

export { getEndPoint, fetchMovieData, fetchSearch };
