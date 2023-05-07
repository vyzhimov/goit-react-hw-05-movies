import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import IsLoading from '../IsLoading';
import { BiMoviePlay, BiSearchAlt } from 'react-icons/bi';

import { Container, Header, NavMenu, HeaderLink } from './SharedLayout.styled';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header>
        <NavMenu>
          <HeaderLink
            to="/"
            id="home"
            active={(location.pathname === '/').toString()}
          >
            <BiMoviePlay style={{ fontSize: '20px' }} />
            HOME
          </HeaderLink>
          <HeaderLink
            to="/movies"
            id="movies"
            active={(location.pathname !== '/').toString()}
          >
            <BiSearchAlt style={{ fontSize: '20px' }} />
            MOVIES
          </HeaderLink>
        </NavMenu>
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
