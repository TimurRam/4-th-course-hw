import * as Styled from './TracksFilterBtnstyles';
import Tracks__FilterModal from 'MainPage/Tracks/TracksFilterModal/TracksFilterModal';
import { fakeState } from 'helpers/fakeState';
import { getSortList } from 'helpers/helpers';

export const TracksFilterBtn = ({ id, isActive, title, makeBtnActive }) => {
  const handleOnClick = () => {
    isActive ? makeBtnActive(0) : makeBtnActive(id);
  };
  //Функция getSortList по тайтлу сопостовляет по какому свойству сформировать
  //массив из стейта, а затем возвращает массив полученных значений
  const sortList = getSortList(title, fakeState);
  return (
    <div>
      <Styled.FilterBtn onClick={handleOnClick} $isActive={isActive}>
        {title}
        {isActive && <Styled.Shortcut>{sortList.length}</Styled.Shortcut>}
      </Styled.FilterBtn>
      {isActive && <Tracks__FilterModal sortList={sortList} />}
    </div>
  );
};

export default TracksFilterBtn;
