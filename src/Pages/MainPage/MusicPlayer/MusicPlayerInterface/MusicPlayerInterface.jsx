import * as styled from './MusicPlayerInterfaceStyled';
import MusicPlayer__Controls from '../MusicPlayerControls/MusicPlayerControls';
import MusicPlayer__Track from '../MusicPlayerTrack/MusicPlayerTrack';
import MusicPlayer__LikeDislike from '../MusicPlayerLikeDislike/MusicPlayerLikeDislike';
import MusicPlayer__Volume from '../MusicPlayerVolume/MusicPlayerVolume';

const MusicPlayerInterface = () => {
  return (
    <styled.playerInterface>
      <styled.leftBlock>
        <MusicPlayer__Controls />
        <MusicPlayer__Track />
        <MusicPlayer__LikeDislike />
      </styled.leftBlock>
      <MusicPlayer__Volume />
    </styled.playerInterface>
  );
};

export default MusicPlayerInterface;
