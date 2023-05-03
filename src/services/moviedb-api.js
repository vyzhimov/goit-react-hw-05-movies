import axios from 'axios';

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
      include_adult: false,
    },
  });

  return response;
};

export { getEndPoint, fetchMovieData };
