import * as styled from './MusicPlayerControlsStyled';
import sprite from 'img/icon/sprite.svg';
import { useState } from 'react';
const MusicPlayerControls = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoop, setIsLoop] = useState(true);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(false);
  };
  const handleShuffle = () => {
    alert('Кнопка еще не реализована');
  };
  const handlePrevTrack = () => {
    alert('Кнопка еще не реализована');
  };
  const handleNextTrack = () => {
    alert('Кнопка еще не реализована');
  };
  const handleLoop = () => {
    setIsLoop(!isLoop);
    audioRef.current.loop = isLoop;
  };
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(true);
  };

  return (
    <styled.playerControls>
      <styled.previos onClick={handlePrevTrack}>
        <styled.previosSvg alt="prev">
          <use xlinkHref={`${sprite}#icon-prev`}></use>
        </styled.previosSvg>
      </styled.previos>
      {isPlaying ? (
        <styled.play onClick={handleStart}>
          <styled.playSvg alt="play">
            <use xlinkHref={`${sprite}#icon-play`}></use>
          </styled.playSvg>
        </styled.play>
      ) : (
        <styled.pause onClick={handleStop}>
          <styled.playSvg alt="pause">
            <use xlinkHref={`${sprite}#icon-pause`}></use>
          </styled.playSvg>
        </styled.pause>
      )}

      <styled.next onClick={handleNextTrack}>
        <styled.nextSvg alt="next">
          <use xlinkHref={`${sprite}#icon-next`}></use>
        </styled.nextSvg>
      </styled.next>
      <styled.repeat $isActive={isLoop} onClick={handleLoop}>
        <styled.repeatSvg alt="repeat">
          <use xlinkHref={`${sprite}#icon-repeat`}></use>
        </styled.repeatSvg>
      </styled.repeat>
      <styled.shuffle onClick={handleShuffle}>
        <styled.shuffleSvg alt="shuffle">
          <use xlinkHref={`${sprite}#icon-shuffle`}></use>
        </styled.shuffleSvg>
      </styled.shuffle>
    </styled.playerControls>
  );
};

export default MusicPlayerControls;
