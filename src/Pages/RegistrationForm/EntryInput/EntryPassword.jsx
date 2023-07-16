import * as styled from './EntryInputStyled'

const EntryPassword = ({ placeholder }) => {
  return (
    <styled.input type="password" placeholder={placeholder} />
  );
};

export default EntryPassword;
