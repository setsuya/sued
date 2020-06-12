import styled from 'styled-components';

export const CustomButton = styled.button`
  background-color: #c33;
  border: 0;
  border-radius: 5px;
  border-bottom: 4px solid #c00;
  padding: 5px 50px;
  color: #bbb;
  outline: 0;
  font-size: 36px;
  font-family: 'Special Elite', cursive;
  text-shadow: 1px 1px 0 #111;

  &:active {
    border-top: 2px solid #1f1f1f;
    border-bottom: 2px solid #c00;
  }
`;
