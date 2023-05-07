import {
  MovieInfoWrapper,
  ImageThumb,
  Image,
  MovieInfoTextWrapper,
  MovieInfoTitle,
  MovieInfoRate,
  MovieInfoSubTitle,
  MovieInfoText,
} from './MovieInfoItem.styled';
import getFullYear from '../../services/getYear';
import NoImage from './noposterdefault.png';

const MovieInfoItem = ({ movieInfo }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieInfo;

  const release = release_date ? getFullYear(release_date) : 'Unknown';
  const movieRate = Math.round(vote_average * 10);

  return (
    <MovieInfoWrapper>
      <ImageThumb>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : NoImage
          }
          alt={original_title}
        ></Image>
      </ImageThumb>
      <MovieInfoTextWrapper>
        <MovieInfoTitle>{`${original_title} (${release})`}</MovieInfoTitle>
        <MovieInfoRate rate={movieRate}>User Score: {movieRate}%</MovieInfoRate>
        <MovieInfoSubTitle>Overview</MovieInfoSubTitle>
        <MovieInfoText>{overview}</MovieInfoText>
        <MovieInfoSubTitle>Genres</MovieInfoSubTitle>
        <MovieInfoText>
          {genres &&
            genres.map(({ id, name }, index, array) => {
              return index !== array.length - 1 ? (
                <span key={id}>{name}, </span>
              ) : (
                <span key={id}>{name}</span>
              );
            })}
        </MovieInfoText>
      </MovieInfoTextWrapper>
    </MovieInfoWrapper>
  );
};

export default MovieInfoItem;
