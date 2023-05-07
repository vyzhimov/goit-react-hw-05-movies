import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEndPoint, fetchMovieData } from 'services/moviedb-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import IsLoading from 'components/IsLoading';
import Error from 'components/Error';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';

const SearchMovies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);
  const movieQuery = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleMovieSearch = query => {
    if (query === '') {
      toast.error('Please enter your query!');
    }

    setSearchParams(query === '' ? {} : { query: query.trim() });
  };

  useEffect(() => {
    const endPoint = getEndPoint('searchMovie', '', movieQuery);
    async function searchMovieByQuery() {
      try {
        setIsLoading(true);
        const movie = await fetchMovieData(endPoint).then(r => r.data.results);
        setMovieList([...movie]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (movieQuery) {
      searchMovieByQuery();
    }
  }, [movieQuery]);

  return (
    <>
      <SearchForm handleSubmit={handleMovieSearch} />
      {isLoading && <IsLoading />}
      {error && <Error message={error} />}
      {!isLoading && !error && movieQuery && (
        <MoviesList trendingMovies={movieList} location={location} />
      )}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default SearchMovies;
