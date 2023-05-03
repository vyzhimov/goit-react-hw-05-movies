import { useEffect, useRef, useState, Suspense } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { getEndPoint, fetchMovieData } from 'services/moviedb-api';

const Movie = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const endPoint = getEndPoint('movieInfo', movieId);

  useEffect(() => {
    async function getMoviInfo() {
      try {
        const movie = await fetchMovieData(endPoint).then(r => r.data);
        setMovie({ ...movie });
      } catch (error) {}
    }

    getMoviInfo();
  }, [endPoint]);

  const { poster_path, original_title, vote_average, overview, genres } = movie;

  return (
    <>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movie;
