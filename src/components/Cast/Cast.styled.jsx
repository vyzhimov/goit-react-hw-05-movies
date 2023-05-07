import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const CastListItem = styled.li`
  width: calc((100% - 120px) / 6);

  & p {
    margin-top: 15px;
    color: #fff;
    font-size: 18px;
    text-align: center;
  }

  & img {
    width: 100%;
  }
`;
