import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API_KEY = '326ecd742c922271411e34618fb1e345';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      return response.data.results;
    }

    async function FetchTrendingMovies() {
      try {
        const trendyMovies = await fetchPopularMovies();
        setTrendingMovie(trendyMovies);
      } catch (error) {}
    }

    FetchTrendingMovies();
  }, []);

  return (
    <ul>
      {trendingMovie.map(({ id, original_title, backdrop_path }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>
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
  );
};

export default Home;
