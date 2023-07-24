import { styled } from 'styled-components';

export const playerTrack = styled.div`
  box-sizing: border-box;
  padding: 0 33px;
  display: flex;
  gap: 10px;
`;
export const trackLogo = styled.div`
  height: 50px;
  width: 50px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const trackLogoSvg = styled.svg`
  height: 20px;
  width: 20px;
  fill: transparent;
  stroke: #696969;
`;
export const text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13px;
  line-height: 24px;


  & a {
    color: #fff;
    text-decoration: none;
  }
`;
