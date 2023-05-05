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
  padding-top: 18px;
  padding-bottom: 18px;
  color: #fff;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(4, 4, 4, 0.3309698879551821) 0%
  );
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const HeaderLink = styled(NavLink)`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 5px 30px;
  border: solid 1px #e50815;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  color: #fff;
  background: red;
  -webkit-box-shadow: -1px 0px 12px -3px rgba(229, 8, 21, 1);
  -moz-box-shadow: -1px 0px 12px -3px rgba(229, 8, 21, 1);
  box-shadow: -1px 0px 12px -3px rgba(229, 8, 21, 1);
  transition: all 250ms;

  &:hover,
  &:focus {
    background-color: #e20712;
    transform: scale(1.1);
    -webkit-box-shadow: -1px 0px 12px 1px rgba(229, 8, 21, 1);
    -moz-box-shadow: -1px 0px 12px 1px rgba(229, 8, 21, 1);
    box-shadow: -1px 0px 12px 1px rgba(229, 8, 21, 1);
  }
`;
