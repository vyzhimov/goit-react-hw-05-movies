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
  padding-top: 14px;
  padding-bottom: 14px;
  color: #fff;
  background-color: #000000;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const HeaderLink = styled(NavLink)`
  display: inline-flex;
  gap: 15px;
  align-items: center;
  padding: 10px 40px;
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
