import * as styled from './MusicPlayerProgressBarStyled';
import { formatTime } from 'helpers/helpers';
import { useState, useEffect } from 'react';

const MusicPlayerProgressBar = ({audioRef}) => {
  const [currentTime, setCurrentTime] = useState(0);
  let duration = 0;
  if (audioRef.current?.duration) {
    duration = audioRef.current.duration;
  }

  useEffect(() => {
    if (audioRef) {
      audioRef.current.autoplay = false;
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime);
        return () => {
          audioRef.current.removeEventListener('timeupdate', () => {
            setCurrentTime(audioRef.current.currentTime);
          });
        };
      });
    }
  });

  return (
    <>
    <styled.progressBar
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={(event) => audioRef.current.currentTime = (event.target.value)}
      $color="#ff0000"
    />
    <styled.duration>
        {formatTime(Math.floor(currentTime))}/{formatTime(Math.floor(duration))}
      </styled.duration>
      </>
  );
}
export default MusicPlayerProgressBar;
