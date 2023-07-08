import * as styled from './EntryBtnStyled';

const EntryBtn = ({ value, colored }) => {
  return <styled.Btn $colored={ colored }>{value}</styled.Btn>;
};

export default EntryBtn;
