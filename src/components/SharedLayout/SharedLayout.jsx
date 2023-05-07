import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import IsLoading from '../IsLoading';
import { BiMoviePlay, BiSearchAlt } from 'react-icons/bi';

import { Container, Header, NavMenu, HeaderLink } from './SharedLayout.styled';

const SharedLayout = () => {
  const [activeBtn, setActiveBtn] = useState('home');

  const handleActiveBtn = event => {
    setActiveBtn(event.target.id);
  };

  return (
    <>
      <Header>
        <NavMenu>
          <HeaderLink
            to="/"
            id="home"
            onClick={handleActiveBtn}
            active={(activeBtn === 'home').toString()}
          >
            <BiMoviePlay style={{ fontSize: '20px' }} />
            HOME
          </HeaderLink>
          <HeaderLink
            to="/movies"
            id="movies"
            onClick={handleActiveBtn}
            active={(activeBtn === 'movies').toString()}
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
