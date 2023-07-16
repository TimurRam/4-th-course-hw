import * as styled from './TracksFilterModalStyled';

const TracksFilterModal = ({ sortList }) => {
  const sortListElements = sortList.map((e) => (
    <li key={e}>
      <a href="#">{e}</a>
    </li>
  ));
  return (
    <styled.modalWrapper>
      <styled.modalList> {sortListElements} </styled.modalList>
    </styled.modalWrapper>
  );
};

export default TracksFilterModal;
