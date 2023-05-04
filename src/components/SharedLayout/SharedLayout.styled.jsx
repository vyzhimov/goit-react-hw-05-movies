import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 15px;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: hsla(0, 0%, 90%, 1);
  background-image: linear-gradient(
    -45deg,
    hsla(0, 0%, 0%, 0),
    hsla(0, 0%, 0%, 0.05)
  );
  background-image: url('./gray-smooth-textured-background.jpg');
  background-size: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderLink = styled(NavLink)`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 20px 40px;
  border-radius: 0.5em;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  color: hsla(0, 0%, 20%, 1);
  text-shadow: hsla(0, 0%, 40%, 0.5) 0 -1px 0, hsla(0, 0%, 100%, 0.6) 0 2px 1px;
  background-color: hsl(0, 0%, 90%);
  box-shadow: inset hsla(0, 0%, 15%, 1) 0 0px 0px 4px,
    /* border */ inset hsla(0, 0%, 15%, 0.8) 0 -1px 5px 4px,
    /* soft SD */ inset hsla(0, 0%, 0%, 0.25) 0 -1px 0px 7px,
    /* bottom SD */ inset hsla(0, 0%, 100%, 0.7) 0 2px 1px 7px,
    /* top HL */ hsla(0, 0%, 0%, 0.15) 0 -5px 6px 4px,
    /* outer SD */ hsla(0, 0%, 100%, 0.5) 0 5px 6px 4px; /* outer HL */

  background-image: -webkit-repeating-linear-gradient(
      left,
      hsla(0, 0%, 100%, 0) 0%,
      hsla(0, 0%, 100%, 0) 6%,
      hsla(0, 0%, 100%, 0.1) 7.5%
    ),
    -webkit-repeating-linear-gradient(left, hsla(0, 0%, 0%, 0) 0%, hsla(
            0,
            0%,
            0%,
            0
          )
          4%, hsla(0, 0%, 0%, 0.03) 4.5%),
    -webkit-repeating-linear-gradient(left, hsla(0, 0%, 100%, 0) 0%, hsla(
            0,
            0%,
            100%,
            0
          )
          1.2%, hsla(0, 0%, 100%, 0.15) 2.2%),
    linear-gradient(
      180deg,
      hsl(0, 0%, 78%) 0%,
      hsl(0, 0%, 90%) 47%,
      hsl(0, 0%, 78%) 53%,
      hsl(0, 0%, 70%) 100%
    );
  transition: color 250ms ease-in-out, text-shadow 250ms ease-in-out,
    box-shadow 250ms ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: hsl(210, 100%, 40%);
    text-shadow: hsla(210, 100%, 20%, 0.3) 0 -1px 0,
      hsl(210, 100%, 85%) 0 2px 1px, hsla(200, 100%, 80%, 1) 0 0 5px,
      hsla(210, 100%, 50%, 0.6) 0 0 20px;
    box-shadow: inset hsla(210, 100%, 30%, 1) 0 0px 0px 4px,
      /* border */ inset hsla(210, 100%, 15%, 0.4) 0 -1px 5px 4px,
      /* soft SD */ inset hsla(210, 100%, 20%, 0.25) 0 -1px 0px 7px,
      /* bottom SD */ inset hsla(210, 100%, 100%, 0.7) 0 2px 1px 7px,
      /* top HL */ hsla(210, 100%, 75%, 0.8) 0 0px 3px 2px,
      /* outer SD */ hsla(210, 50%, 40%, 0.25) 0 -5px 6px 4px,
      /* outer SD */ hsla(210, 80%, 95%, 1) 0 5px 6px 4px; /* outer HL */
  }
`;
