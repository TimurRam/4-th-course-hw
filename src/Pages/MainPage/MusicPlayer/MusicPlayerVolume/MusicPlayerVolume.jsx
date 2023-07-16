import * as styled from './MusicPlayerVolumeStyled';
import sprite from 'img/icon/sprite.svg';

const MusicPlayer__Volume = () => {
  return (
    <styled.volumeBlock>
      <div>
        <styled.iconSvg>
          <use xlinkHref={`${sprite}#icon-volume`}></use>
        </styled.iconSvg>
      </div>
      <div>
        <input type="range" name="range" />
      </div>
    </styled.volumeBlock>
  );
};

export default MusicPlayer__Volume;
