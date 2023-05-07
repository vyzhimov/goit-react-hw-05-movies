import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 30px 0;
`;

export const MovieListItem = styled.li`
  display: flex;
  width: calc((100% - 90px) / 4);
`;

export const MovieItemLink = styled(Link)`
  display: block;
  width: 100%;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
    -webkit-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    -moz-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
  }
`;

export const MovieItemImage = styled.img`
  width: 100%;
`;

export const MovieItemTextWrapper = styled.div`
  display: flex;
  justify-conten: center;
  align-items: center;
  padding: 15px 10px;
`;

export const MovieItemTitle = styled.p`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  margin: 0 auto;
`;
