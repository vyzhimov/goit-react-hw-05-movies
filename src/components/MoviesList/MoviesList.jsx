import PropTypes from 'prop-types';

import getFullYear from 'services/getYear';
import {
  MovieList,
  MovieListItem,
  MovieItemLink,
  MovieItemImage,
  MovieItemTextWrapper,
  MovieItemTitle,
} from './MoviesList.styled';
import NoImage from './noposter.jpg';
import NoResult from 'components/NoResult';

const TrendingMoviesList = ({ trendingMovies, location }) => {
  const filteredMovies = trendingMovies.filter(
    movie => movie.original_language === 'en'
  );
  return (
    <>
      <MovieList>
        {filteredMovies.length !== 0 ? (
          filteredMovies.map(
            ({ id, backdrop_path, original_title, release_date }) => {
              const release = release_date
                ? getFullYear(release_date)
                : 'Unknown';
              return (
                <MovieListItem key={id}>
                  <MovieItemLink
                    to={`/movies/${id}`}
                    state={{ from: location }}
                  >
                    <MovieItemImage
                      src={
                        backdrop_path
                          ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
                          : `${NoImage}`
                      }
                      alt={original_title}
                      width="200"
                    ></MovieItemImage>
                    <MovieItemTextWrapper>
                      <MovieItemTitle>{`${original_title} (${release})`}</MovieItemTitle>
                    </MovieItemTextWrapper>
                  </MovieItemLink>
                </MovieListItem>
              );
            }
          )
        ) : (
          <NoResult />
        )}
      </MovieList>
    </>
  );
};

export default TrendingMoviesList;

TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      backdrop_path: PropTypes.string,
      original_title: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
  location: PropTypes.object,
};
