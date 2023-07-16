import { styled } from 'styled-components';
export const Btn = styled.button`
  display: block;
  width: 100%;
  height: 52px;
  font-family: 'Stratos', sans-serif;
  border: 1px solid #d0cece;
  border-radius: 6px;
  background-color: transparent;
  font-size: 18px;
  line-height: 24px;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d0cece;
  }


${
  ({ $colored }) => {
    if ($colored) {
      return `
    background-color: #580ea2;
    color: #fff;
    &:hover {
    background-color: #580ea2;
    color: #fff;
    }
    &:active {
    background-color: #271a58;
    }
  `;
    }
  }
}
`