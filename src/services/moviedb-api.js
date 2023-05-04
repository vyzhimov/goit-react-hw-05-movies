import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '326ecd742c922271411e34618fb1e345';
const language = 'en-US';

const getEndPoint = (path, movieId, query) => {
  switch (path) {
    case 'trending':
      return `/trending/movie/day?api_key=${API_KEY}`;
    case 'movieInfo':
      return `/movie/${movieId}?api_key=${API_KEY}&language=${language}`;
    case 'cast':
      return `/movie/${movieId}/credits?api_key=${API_KEY}&language=${language}`;
    case 'reviews':
      return `/movie/${movieId}/reviews?api_key=${API_KEY}&$language={language}&page=1`;
    case 'searchMovie':
      return `/search/movie?api_key=${API_KEY}&language=${language}&query=${query}&page=1&include_adult=false`;
    default:
      console.log('default');
  }
};

const fetchMovieData = async endPoint => {
  const response = axios.get(`${endPoint}`);

  return response;
};

export { getEndPoint, fetchMovieData };
