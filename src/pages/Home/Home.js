import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEndPoint, fetchMovieData } from 'services/moviedb-api';

import IsLoading from 'components/IsLoading';
import Error from 'components/Error';
import { TrendingListTitle } from './Home.styled';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const endPoint = getEndPoint('trending');

    async function FetchTrendingMovies() {
      try {
        setIsLoading(true);
        const movies = await fetchMovieData(endPoint).then(r => r.data.results);
        setTrendingMovies([...movies]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    FetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading && <IsLoading />}
      {error && <Error message={error} />}
      {!isLoading && !error && (
        <>
          <TrendingListTitle>Trending Movies</TrendingListTitle>
          <MoviesList trendingMovies={trendingMovies} location={location} />
        </>
      )}
    </>
  );
};

export default Home;
