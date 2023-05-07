import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 200px;
  height: 32px;
  padding: 5px 20px;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid #fff;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  color: #fff;
  background-color: ${({ active }) => {
    return active === 'true' ? '#e20712' : 'transparent';
  }};
  -webkit-box-shadow: -1px 0px 12px -3px rgba(255, 255, 255, 1);
  -moz-box-shadow: -1px 0px 12px -3px rgba(255, 255, 255, 1);
  box-shadow: -1px 0px 12px -3px rgba(255, 255, 255, 1);
  transition: all 250ms;

  &:hover,
  &:focus-visible {
    background-color: #e20712;
    transform: scale(1.1);
    -webkit-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    -moz-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
  }
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  padding: 30px 0;
  gap: 30px;
  align-items: stretch;
`;

export const ImageThumb = styled.div`
  width: 400px;
  height: 600px;
`;

export const Image = styled.img`
  display: block;
  width: 400px;
  height: auto;
`;

export const MovieInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: #fff;
`;

export const MovieInfoTitle = styled.h1`
  font-size: 50px;
`;

export const MovieInfoRate = styled.p`
 font-size: 24px;  
 color: ${({ rate }) => {
   if (rate < 50) {
     return 'red';
   } else if (rate > 50 && rate < 80) {
     return 'yellow';
   } else {
     return 'green';
   }
 }}}
`;

export const MovieInfoSubTitle = styled.h2`
  font-size: 32px;
`;

export const MovieInfoText = styled.p`
  font-size: 20px;
  max-width: 80%;
`;

export const MovieInfoBtnList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
