import * as styled from './MusicPlayerStyled';
import MusicPlayer__ProgressBar from './MusicPlayer__ProgressBar/MusicPlayer__ProgressBar';
import MusicPlayer__Interface from './MusicPlayer__Interface/MusicPlayer__Interface';
const MusicPlayer = () => {
  return (
    <styled.musicPlayer>
      <MusicPlayer__ProgressBar />
      <MusicPlayer__Interface />
    </styled.musicPlayer>
  );
};

export default MusicPlayer;
