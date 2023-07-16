import * as styled from './MusicPlayerControlsStyled';
import sprite from 'img/icon/sprite.svg';
const MusicPlayerControls = () => {
  return (
    <styled.playerControls>
      <styled.previos>
        <styled.previosSvg alt="prev">
          <use xlinkHref={`${sprite}#icon-prev`}></use>
        </styled.previosSvg>
      </styled.previos>
      <styled.play>
        <styled.playSvg alt="play">
          <use xlinkHref={`${sprite}#icon-play`}></use>
        </styled.playSvg>
      </styled.play>
      <styled.next>
        <styled.nextSvg alt="next">
          <use xlinkHref={`${sprite}#icon-next`}></use>
        </styled.nextSvg>
      </styled.next>
      <styled.repeat>
        <styled.repeatSvg alt="repeat">
          <use xlinkHref={`${sprite}#icon-repeat`}></use>
        </styled.repeatSvg>
      </styled.repeat>
      <styled.shuffle>
        <styled.shuffleSvg alt="shuffle">
          <use xlinkHref={`${sprite}#icon-shuffle`}></use>
        </styled.shuffleSvg>
      </styled.shuffle>
    </styled.playerControls>
  );
};

export default MusicPlayerControls;
