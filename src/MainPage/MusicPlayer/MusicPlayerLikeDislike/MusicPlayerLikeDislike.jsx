import * as styled from './MusicPlayerLikeDislikeStyled';
import sprite from 'img/icon/sprite.svg';

const MusicPlayerLikeDislike = () => {
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

export default MusicPlayerLikeDislike;
