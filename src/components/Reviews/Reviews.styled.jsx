import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

export const ReviewsListItem = styled.li`
  color: #fff;

  & span {
    color: #e20712;
  }
  & p {
    margin-top: 30px;
  }
`;

export const NoReviews = styled.h2`
  color: #fff;
  margin: 30px auto;
`;
