import * as styled from './TracksTrackStyled';
import sprite from 'img/icon/sprite.svg';
import { formatTime } from 'helpers/helpers';

const TracksTrack = ({
  logo,
  name,
  author,
  album,
  duration,
  loadingClass,
}) => {
  return (
    <styled.track>
      <styled.trackLogo className={loadingClass}>
        {!logo && (
          <styled.trackLogoSvg>
            <use xlinkHref={`${sprite}#icon-note`} />
          </styled.trackLogoSvg>
        )}
      </styled.trackLogo>
      <styled.trackName className={loadingClass}>{name}</styled.trackName>
      <div className={loadingClass}>{author}</div>
      <div className={loadingClass}>{album}</div>
      <div className={loadingClass}>
        <styled.trackLike>
          <use xlinkHref={`${sprite}#icon-like`} />
        </styled.trackLike>
      </div>
      <styled.trackTime className={loadingClass}>
        {formatTime(duration)}
      </styled.trackTime>
    </styled.track>
  );
};

export default TracksTrack;
