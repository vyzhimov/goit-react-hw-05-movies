import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import SearchMovies from 'pages/SearchMovies';
import MovieInfo from 'pages/MovieInfo';
import Cast from 'components/Cast';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<h2>Reviews</h2>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
