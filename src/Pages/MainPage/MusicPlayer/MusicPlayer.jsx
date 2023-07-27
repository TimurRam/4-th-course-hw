import * as styled from './MusicPlayerStyled';
import MusicPlayer__ProgressBar from './MusicPlayerProgressBar/MusicPlayerProgressBar';
import MusicPlayer__Interface from './MusicPlayerInterface/MusicPlayerInterface';
import { useRef } from 'react';
const MusicPlayer = ({ currentTrack, invisible }) => {
  const audioRef = useRef(Boolean);
  
  
  return (
    <styled.musicPlayer  $invisible={invisible}>
      <MusicPlayer__ProgressBar audioRef={audioRef} />
      <MusicPlayer__Interface audioRef={audioRef} currentTrack={currentTrack} />
    </styled.musicPlayer>
  );
};

export default MusicPlayer;
