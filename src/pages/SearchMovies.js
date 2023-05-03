import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEndPoint, fetchSearch } from 'services/moviedb-api';

const SearchMovies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState('');
  const [movieList, setMovieList] = useState([]);
  const movieQuery = searchParams.get('query') ?? '';
  const endPoint = getEndPoint('searchMovie');

  const handleInputChange = evt => {
    setMovieName(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams(movieName === '' ? {} : { query: movieName });
  };

  useEffect(() => {
    // async function fetchMovie() {
    //   const response = await axios.get(
    //     `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`
    //     `
    //   );
    //   return response.data.results;
    // }

    console.log(endPoint);
    console.log(movieQuery);

    async function searchMovieByQuery() {
      try {
        const movie = await fetchSearch(movieQuery).then(r => r.data.results);
        setMovieList([...movie]);
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
          {movieList.map(movie => {
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
