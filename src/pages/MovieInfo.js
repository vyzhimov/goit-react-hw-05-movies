import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';

const API_KEY = '326ecd742c922271411e34618fb1e345';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      return response.data;
    }

    async function getMovie() {
      try {
        const movie = await fetchMovie();
        setMovie({ ...movie });
      } catch (error) {}
    }

    getMovie();
  }, [movieId]);

  const { poster_path, original_title, vote_average, overview, genres } = movie;

  return (
    <>
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
      <Outlet />
    </>
  );
};

export default Movie;
