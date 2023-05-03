import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEndPoint, fetchMovieData } from 'services/moviedb-api';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const endPoint = getEndPoint('cast', movieId);

  useEffect(() => {
    async function getCast() {
      try {
        const cast = await fetchMovieData(endPoint).then(r => r.data.cast);
        setCastList([...cast]);
      } catch (error) {}
    }

    getCast();
  }, [endPoint]);

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
