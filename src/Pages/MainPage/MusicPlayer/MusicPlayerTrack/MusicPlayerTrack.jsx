import * as styled from './MusicPlayerTrackStaled';
import sprite from 'img/icon/sprite.svg';

const MusicPlayerTrack = ({ currentTrack }) => {
  console.log(currentTrack);
  return (
    <styled.playerTrack>
      <styled.trackLogo>
        <styled.trackLogoSvg>
          <use xlinkHref={`${sprite}#icon-note`}></use>
        </styled.trackLogoSvg>
      </styled.trackLogo>
      <div>
        <styled.text>
          <a className="track-play__author-link" href={currentTrack.track_file}>
            {currentTrack.author}
          </a>
        </styled.text>
        <styled.text>
          <a className="track-play__album-link" href={currentTrack.track_file}>
            {currentTrack.name}
          </a>
        </styled.text>
      </div>
    </styled.playerTrack>
  );
};

export default MusicPlayerTrack;
