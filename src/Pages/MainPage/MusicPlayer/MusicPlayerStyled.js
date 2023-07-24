import { styled } from 'styled-components';
export const musicPlayer = styled.div`
  width: inherit;
  display: ${({ $invisible }) => ($invisible ? 'flex' : 'none')};
  flex-direction: column;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.844);
`;
