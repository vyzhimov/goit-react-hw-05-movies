import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEndPoint, fetchMovieData } from 'services/moviedb-api';
import IsLoading from 'components/IsLoading';
import Error from 'components/Error';

const Home = () => {
  const location = useLocation();
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const endPoint = getEndPoint('trending');

  useEffect(() => {
    async function FetchTrendingMovies() {
      try {
        setIsLoading(true);
        const movies = await fetchMovieData(endPoint).then(r => r.data.results);
        setTrendingMovie([...movies]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    FetchTrendingMovies();
  }, [endPoint]);

  return (
    <>
      {isLoading && <IsLoading />}
      {error && <Error message={error} />}
      {!isLoading && !error && (
        <ul>
          {trendingMovie.map(({ id, original_title, backdrop_path }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt={original_title}
                    width="200"
                  ></img>
                  {original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Home;
