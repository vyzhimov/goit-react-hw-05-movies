import { NavLink, Outlet } from 'react-router-dom';

import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;
