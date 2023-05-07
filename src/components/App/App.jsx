import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout';
const Home = lazy(() => import('../../pages/Home'));
const SearchMovies = lazy(() => import('../../pages/SearchMovies'));
const MovieInfo = lazy(() => import('../../pages/MovieInfo'));
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

// Додати propTypes
// Картинка заглушка на акторів
// Зробити активну кнопу movie при переході на сторінку деталей фільму
// Зробити abortcontroller на запити
