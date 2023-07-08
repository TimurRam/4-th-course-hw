import * as styled from './MusicPlayer__InterfaceStyled';
import MusicPlayer__Controls from '../MusicPlayer__Controls/MusicPlayer__Controls';
import MusicPlayer__Track from '../MusicPlayer__Track/MusicPlayer__Track';
import MusicPlayer__LikeDislike from '../MusicPlayer__LikeDislike/MusicPlayer__LikeDislike';
import MusicPlayer__Volume from '../MusicPlayer__Volume/MusicPlayer__Volume';

const MusicPlayer__Interface = () => {
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

export default MusicPlayer__Interface;
