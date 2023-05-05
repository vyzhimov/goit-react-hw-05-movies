import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import IsLoading from '../IsLoading';
import { BiMoviePlay, BiSearchAlt } from 'react-icons/bi';

import { Container, Header, NavMenu, HeaderLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <NavMenu>
          <HeaderLink to="/">
            <BiMoviePlay style={{ fontSize: '20px' }} />
            HOME
          </HeaderLink>
          <HeaderLink to="/movies">
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
