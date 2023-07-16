import * as styled from './Tracks__ListHeadStyled';
import sprite from 'img/icon/sprite.svg';
const Tracks__ListHead = ({ heading = 'Треки' }) => {
  return (
    <styled.listHead>
      <div>Трек</div>
      <div>Исполнитель</div>
      <div>Альбом</div>
      <div></div>
      <styled.timeCol>
        <styled.watchSvg>
          <use xlinkHref={`${sprite}#icon-watch`} />
        </styled.watchSvg>
      </styled.timeCol>
    </styled.listHead>
  );
};

export default Tracks__ListHead;
