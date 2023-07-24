import * as styled from './MusicPlayerStyled';
import MusicPlayer__ProgressBar from './MusicPlayerProgressBar/MusicPlayerProgressBar';
import MusicPlayer__Interface from './MusicPlayerInterface/MusicPlayerInterface';

const MusicPlayer = ({ currentTrack, invisible }) => {
  return (
    <styled.musicPlayer $invisible={invisible}>
      <MusicPlayer__ProgressBar />
      <MusicPlayer__Interface currentTrack={currentTrack} />
    </styled.musicPlayer>
  );
};

export default MusicPlayer;
