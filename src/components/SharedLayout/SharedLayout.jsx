import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import IsLoading from '../IsLoading';
import { BiMoviePlay, BiSearchAlt } from 'react-icons/bi';

import { Container, Header, HeaderLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <HeaderLink to="/">
            <BiMoviePlay style={{ fontSize: '30px' }} />
            HOME
          </HeaderLink>
          <HeaderLink to="/movies">
            <BiSearchAlt style={{ fontSize: '30px' }} />
            MOVIES
          </HeaderLink>
        </nav>
      </Header>
      <Container>
        <main>
          <Suspense fallback={<IsLoading />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default SharedLayout;
