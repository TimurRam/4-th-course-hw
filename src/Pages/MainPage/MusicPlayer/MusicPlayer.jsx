import * as styled from './MusicPlayerStyled';
import MusicPlayer__ProgressBar from './MusicPlayerProgressBar/MusicPlayerProgressBar';
import MusicPlayer__Interface from './MusicPlayerInterface/MusicPlayerInterface';
const MusicPlayer = () => {
  return (
    <styled.musicPlayer>
      <MusicPlayer__ProgressBar />
      <MusicPlayer__Interface />
    </styled.musicPlayer>
  );
};

export default MusicPlayer;
