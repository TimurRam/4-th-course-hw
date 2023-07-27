import * as styled from './MusicPlayerVolumeStyled';
import sprite from 'img/icon/sprite.svg';
import { useState } from 'react';
const MusicPlayer__Volume = ({ audioRef }) => {
  const [volumeValue, setVolumeValue] = useState('1');
  const handlerOnChangeVolume = (e) => {
    setVolumeValue(e.target.value);
    audioRef.volume = setVolumeValue(e.target.value);
  };

  if (audioRef) audioRef.current.volume = parseFloat(volumeValue);

  return (
    <styled.volumeBlock>
      <div>
        <styled.iconSvg>
          <use xlinkHref={`${sprite}#icon-volume`}></use>
        </styled.iconSvg>
      </div>
      <div>
        <input
          onInput={(e) => handlerOnChangeVolume(e)}
          type="range"
          id="volume"
          min="0"
          max="1"
          value={volumeValue}
          step="0.01"
        />
      </div>
    </styled.volumeBlock>
  );
};

export default MusicPlayer__Volume;
