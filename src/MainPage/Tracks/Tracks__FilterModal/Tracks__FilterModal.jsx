import * as styled from './Tracks__FilterModalStyled';

const Tracks__FilterModal = ({ sortList }) => {
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

export default Tracks__FilterModal;
