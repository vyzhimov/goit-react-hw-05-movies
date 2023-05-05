import { useEffect, useRef, useState, Suspense } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { getEndPoint, fetchMovieData } from 'services/moviedb-api';
import IsLoading from 'components/IsLoading';
import Error from 'components/Error';

const Movie = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const endPoint = getEndPoint('movieInfo', movieId);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMoviInfo() {
      try {
        setIsLoading(true);
        const movie = await fetchMovieData(endPoint).then(r => r.data);
        setMovie({ ...movie });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviInfo();
  }, [endPoint]);

  const { poster_path, original_title, vote_average, overview, genres } = movie;

  return (
    <>
      {isLoading && <IsLoading />}
      {error && <Error />}
      {!isLoading && !error && (
        <div>
          <Link to={backLinkLocationRef.current}>Go Back</Link>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={original_title}
              width="200"
            ></img>
          </div>
          <div>
            <h1>{original_title}</h1>
            <p>User Score: {Math.round(vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>
              {genres &&
                genres.map(({ id, name }, index, array) => {
                  return index !== array.length - 1 ? (
                    <span key={id}>{name}, </span>
                  ) : (
                    <span key={id}>{name}</span>
                  );
                })}
            </p>
          </div>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<IsLoading />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Movie;
