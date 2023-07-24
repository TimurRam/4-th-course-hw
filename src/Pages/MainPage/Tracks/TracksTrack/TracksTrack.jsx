import * as styled from './TracksTrackStyled';
import sprite from 'img/icon/sprite.svg';
import { formatTime } from 'helpers/helpers';

const TracksTrack = ({
  track,
  setCurrentTrack,
  setInvisible,
  loadingClass,
}) => {
  const HandleOnClick = () => {
    setCurrentTrack(track);
    setInvisible('true');
  };
  return (
    <styled.track>
      <styled.trackLogo className={loadingClass}>
        {!track.logo && (
          <styled.trackLogoSvg>
            <use xlinkHref={`${sprite}#icon-note`} />
          </styled.trackLogoSvg>
        )}
      </styled.trackLogo>
      <styled.trackName
        onClick={() => HandleOnClick()}
        className={loadingClass}
      >
        {track.name}
      </styled.trackName>
      <div className={loadingClass}>{track.author}</div>
      <div className={loadingClass}>{track.album}</div>
      <div className={loadingClass}>
        <styled.trackLike>
          <use xlinkHref={`${sprite}#icon-like`} />
        </styled.trackLike>
      </div>
      <styled.trackTime className={loadingClass}>
        {formatTime(track.duration_in_seconds)}
      </styled.trackTime>
    </styled.track>
  );
};

export default TracksTrack;
