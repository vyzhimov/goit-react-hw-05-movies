import { useEffect, useRef, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getEndPoint, fetchMovieData } from 'services/moviedb-api';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { animateScroll as scroll } from 'react-scroll';

import IsLoading from 'components/IsLoading';
import Error from 'components/Error';
import MovieInfoItem from 'components/MovieInfoItem';
import {
  Button,
  MovieInfoBtnList,
} from 'components/MovieInfoItem/MovieInfoItem.styled';

const Movie = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const endPoint = getEndPoint('movieInfo', movieId);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeBtn, setActiveBtn] = useState('');

  const handleMovieBtnClick = e => {
    setActiveBtn(e.target.id);
    scroll.scrollTo(730);
  };

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

  return (
    <>
      {isLoading && <IsLoading />}
      {error && <Error />}
      {!isLoading && !error && (
        <div>
          <Button to={backLinkLocationRef.current}>
            {<RiArrowGoBackFill />} GO BACK
          </Button>
          <MovieInfoItem movieInfo={movie} />
          <MovieInfoBtnList>
            <li>
              <Button
                to="cast"
                id="cast"
                onClick={handleMovieBtnClick}
                active={(activeBtn === 'cast').toString()}
              >
                Cast
              </Button>
            </li>
            <li>
              <Button
                to="reviews"
                id="reviews"
                onClick={handleMovieBtnClick}
                active={(activeBtn === 'reviews').toString()}
              >
                Reviews
              </Button>
            </li>
          </MovieInfoBtnList>
          <Suspense fallback={<IsLoading />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Movie;
