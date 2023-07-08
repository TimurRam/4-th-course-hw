import * as styled from './MusicPlayer__LikeDislikeStyled';
import sprite from 'img/icon/sprite.svg';

const MusicPlayer__LikeDislike = () => {
  return (
    <styled.playerLikeDislikeGroup>
      <styled.likeSvg alt="like">
        <use xlinkHref={`${sprite}#icon-like`}></use>
      </styled.likeSvg>

      <styled.dislikeSvg alt="dislike">
        <use xlinkHref={`${sprite}#icon-dislike`}></use>
      </styled.dislikeSvg>
    </styled.playerLikeDislikeGroup>
  );
};

export default MusicPlayer__LikeDislike;
