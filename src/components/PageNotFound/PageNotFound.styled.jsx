import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NoPageLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #fff;

  & img {
    width: 500px;
  }
`;
