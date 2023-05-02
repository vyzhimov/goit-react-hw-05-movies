import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '326ecd742c922271411e34618fb1e345';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    async function fetchCasts() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      return response.data.cast;
    }

    async function getCasts() {
      try {
        const cast = await fetchCasts();
        setCastList([...cast]);
      } catch (error) {}
    }

    getCasts();
  }, [movieId]);

  return (
    <ul>
      {castList &&
        castList.map(actor => {
          return (
            <li key={actor.id}>
              <h2>{actor.name}</h2>
              <img
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt={actor.name}
                width="200px"
              />
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;

/// Зробити аборт контролер в useEffect
/// Зробити сторінку помилки, якщо ввели неправильний url
