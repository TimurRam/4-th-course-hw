import * as styled from './MusicPlayerInterfaceStyled';
import MusicPlayer__Controls from '../MusicPlayerControls/MusicPlayerControls';
import MusicPlayer__Track from '../MusicPlayerTrack/MusicPlayerTrack';
import MusicPlayer__LikeDislike from '../MusicPlayerLikeDislike/MusicPlayerLikeDislike';
import MusicPlayer__Volume from '../MusicPlayerVolume/MusicPlayerVolume';

const MusicPlayerInterface = ({ currentTrack, audioRef }) => {
  

  return (
    <styled.playerInterface>
      <styled.leftBlock>
        <MusicPlayer__Controls audioRef={audioRef} />
        <MusicPlayer__Track audioRef={audioRef} currentTrack={currentTrack} />
        <MusicPlayer__LikeDislike />
      </styled.leftBlock>
      <MusicPlayer__Volume audioRef={audioRef} />
    </styled.playerInterface>
  );
};

export default MusicPlayerInterface;
