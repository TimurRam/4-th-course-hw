import * as styled from './EntryInputStyled'

const EntryInput = ({ placeholder }) => {
  return (
    <styled.input type="text" placeholder={placeholder} />
  );
};

export default EntryInput;
