import { styled } from 'styled-components';
export const header = styled.header`
  grid-column: 1 / -1;
  min-width: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 15% 60% 25%;
  align-items: center;
`;

export const logoContainer = styled.div`
  grid-column: 1 / 2;
`;
export const logo = styled.img`
  width: 113.33px;
  height: 17px;
`;
