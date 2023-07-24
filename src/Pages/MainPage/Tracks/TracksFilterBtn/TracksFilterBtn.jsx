import * as Styled from './TracksFilterBtnStyled';

import { fakeState } from 'helpers/fakeState';
import { getSortList } from 'helpers/helpers';
import TracksFilterModal from '../TracksFilterModal/TracksFilterModal';

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
      {isActive && <TracksFilterModal sortList={sortList} />}
    </div>
  );
};

export default TracksFilterBtn;
