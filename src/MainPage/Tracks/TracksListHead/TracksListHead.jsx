import * as styled from './TracksListHeadStyled';
import sprite from 'img/icon/sprite.svg';
const TracksListHead = () => {
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

export default TracksListHead;
