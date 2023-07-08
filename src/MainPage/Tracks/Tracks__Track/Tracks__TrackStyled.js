import { styled } from 'styled-components';
export const track = styled.div`
  display: grid;
  grid-template-columns: 50px calc(40% - 50px) 30% 24% 2% 4%;
  grid-template-rows: 50px;
  align-items: center;
  margin-top: 12px;
`;
export const trackLogo = styled.div`
  height: 50px;
  width: 50px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

/* .trackLogo::before {
  content: '';
  position: absolute;
  z-index: 10;
  height: inherit;
  width: 100%;
  background-color: gray;
  display: block;
} */
export const trackLogoSvg = styled.svg`
  height: 20px;
  width: 20px;
  fill: transparent;
  stroke: #696969;
`;
export const trackName = styled.div`
  box-sizing: border-box;
  margin: 0 15px;
`;

export const trackLike = styled.svg`
  width: 14px;
  height: 12px;
  stroke: #696969;
`;

export const trackTime = styled.div`
  text-align: right;
`;
