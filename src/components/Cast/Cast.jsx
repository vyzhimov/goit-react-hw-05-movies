import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getEndPoint, fetchMovieData } from 'services/moviedb-api';
import IsLoading from 'components/IsLoading';
import { CastList, CastListItem } from './Cast.styled';
import NoImage from './no-image-available.png';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const endPoint = getEndPoint('cast', movieId);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        const cast = await fetchMovieData(endPoint).then(r => r.data.cast);
        setCastList([...cast]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [endPoint]);

  return (
    <>
      {isLoading && <IsLoading />}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {!isLoading && (
        <CastList>
          {castList &&
            castList.map(({ id, name, profile_path }) => {
              const image = profile_path
                ? `https://image.tmdb.org/t/p/original/${profile_path}`
                : NoImage;
              return (
                <CastListItem key={id}>
                  <p>{name}</p>
                  <img src={image} alt={name} />
                </CastListItem>
              );
            })}
        </CastList>
      )}
    </>
  );
};

export default Cast;
