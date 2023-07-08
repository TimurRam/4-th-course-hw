import * as styled from './Tracks__SearchFilterStyled';
import Tracks__FilterBtn from '../Tracks__FilterBtn/Tracks__FilterBtn';
import { useState } from 'react';

const Tracks__SearchFilter = () => {
  const [activeButton, setActiveButton] = useState(0);
  const makeBtnActive = (id) => {
    setActiveButton(id);
  };
  return (
    <styled.searchFilter>
      <styled.heading>Искать по:</styled.heading>
      <Tracks__FilterBtn
        makeBtnActive={makeBtnActive}
        id="1"
        isActive={activeButton === '1' && true}
        title="исполнителю"
      />
      <Tracks__FilterBtn
        makeBtnActive={makeBtnActive}
        id="2"
        isActive={activeButton === '2' && true}
        title="году выпуска"
      />
      <Tracks__FilterBtn
        makeBtnActive={makeBtnActive}
        id="3"
        isActive={activeButton === '3' && true}
        title="жанру"
      />
    </styled.searchFilter>
  );
};

export default Tracks__SearchFilter;
