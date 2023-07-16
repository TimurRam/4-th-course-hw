import * as styled from './MusicPlayerTrackStaled';
import sprite from 'img/icon/sprite.svg';

const MusicPlayerTrack = () => {
  return (
    <styled.playerTrack>
      <styled.trackLogo>
        <styled.trackLogoSvg>
          <use xlinkHref={`${sprite}#icon-note`}></use>
        </styled.trackLogoSvg>
      </styled.trackLogo>
      <div>
        <styled.text>
          <a className="track-play__author-link" href="http://">
            Ты та...
          </a>
        </styled.text>
        <styled.text>
          <a className="track-play__album-link" href="http://">
            Баста
          </a>
        </styled.text>
      </div>
    </styled.playerTrack>
  );
};

export default MusicPlayerTrack;
