import { styled } from 'styled-components';
export const playerControls = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
`;
export const pause = styled.div`
  display: flex;
  & svg {
    fill: #d9d9d9;
    stroke: #d9d9d9;
  }
  &:hover svg {
    cursor: pointer;
    fill: #696969;
    stroke: #696969;
  }
  &:active svg {
    fill: #d9d9d9;
    stroke: #d9d9d9;
  }
`;

export const previos = styled.div`
  display: flex;
`;
export const previosSvg = styled.svg`
  width: 15px;
  height: 14px;
`;
export const play = styled.div`
  display: flex;
  &:hover svg {
    cursor: pointer;
    fill: #696969;
    stroke: #696969;
  }
  &:active svg {
    fill: #d9d9d9;
    stroke: #d9d9d9;
  }
`;
export const playSvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`;
export const next = styled.div`
  display: flex;
`;

export const nextSvg = styled.svg`
  width: 15px;
  height: 14px;
`;
export const repeat = styled.div`
display: flex;
& svg {
  fill: ${({ $isActive }) => ($isActive ? 'gray' : 'white')};
}
`;
export const repeatSvg = styled.svg`
  width: 18px;
  height: 12px;
`;
export const shuffle = styled.div`
  display: flex;
`;
export const shuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
`;
