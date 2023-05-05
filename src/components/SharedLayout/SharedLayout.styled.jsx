import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 32px;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  color: #fff;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9640449929971989) 0%,
    rgba(0, 0, 0, 0.7091430322128851) 47%,
    rgba(24, 24, 24, 0.7119441526610644) 100%
  );
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const HeaderLink = styled(NavLink)`
  display: inline-flex;
  gap: 15px;
  align-items: center;
  padding: 5px 30px;
  border-radius: 5px;
  border: solid 1px #e50815;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  color: #fff;
  background: red;
  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #e20712;
  }
`;
