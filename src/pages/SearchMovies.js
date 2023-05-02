import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '326ecd742c922271411e34618fb1e345';

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState('');
  const [movieList, setMovieList] = useState([]);

  const movieQuery = searchParams.get('query');

  const handleInputChange = evt => {
    setMovieName(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams(movieName === '' ? {} : { query: movieName });
    // console.log(searchParams.get('query'));
  };

  useEffect(() => {
    async function fetchMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieQuery}&page=1`
      );
      return response.data.results;
    }

    async function searchMovieByQuery() {
      try {
        const movie = await fetchMovie();
        setMovieList(movie);
      } catch (error) {}
    }

    if (movieQuery) {
      searchMovieByQuery();
    }
  }, [movieQuery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          name="movie"
          value={movieName}
          //   required
          onChange={handleInputChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      {movieQuery && (
        <ul>
          {movieList.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <h2>{movie.original_title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SearchMovies;
