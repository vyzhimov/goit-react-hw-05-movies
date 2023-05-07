import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 25px;
  font-weight: 500;
  color: #fff;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 5px;
  border: 2px solid #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 20px;
  outline: none;
  color: #fff;
  background-color: transparent;

  &:focus {
    -webkit-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    -moz-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #fff;
  height: 40px;
  width: 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 2px solid #fff;
  border-left: none;
  transition: all 250ms ease-in-out;

  & svg {
    font-size: 18px;
    fill: current-color;
  }

  &:hover,
  &:focus-visible {
    background-color: #e20712;
  }
`;
