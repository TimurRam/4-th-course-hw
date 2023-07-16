import * as styled from './TracksSearchFilterStyled';
import Tracks__FilterBtn from '../TracksFilterBtn/TracksFilterBtn';
import { useState } from 'react';

const TracksSearchFilter = () => {
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

export default TracksSearchFilter;
