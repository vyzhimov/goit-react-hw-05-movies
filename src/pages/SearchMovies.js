import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEndPoint, fetchMovieData } from 'services/moviedb-api';

const SearchMovies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState('');
  const [movieList, setMovieList] = useState([]);
  const movieQuery = searchParams.get('query') ?? '';
  const endPoint = getEndPoint('searchMovie', '', movieQuery);

  const handleInputChange = evt => {
    setMovieName(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams(movieName === '' ? {} : { query: movieName.trim() });
  };

  useEffect(() => {
    async function searchMovieByQuery() {
      try {
        const movie = await fetchMovieData(endPoint).then(r => r.data.results);
        setMovieList([...movie]);
        console.log(movie);
      } catch (error) {}
    }

    if (movieQuery) {
      searchMovieByQuery();
    }
  }, [endPoint, movieQuery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          name="movie"
          value={movieName}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      {movieQuery && (
        <ul>
          {movieList
            .filter(movie => movie.original_language === 'en')
            .map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`} state={{ from: location }}>
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
