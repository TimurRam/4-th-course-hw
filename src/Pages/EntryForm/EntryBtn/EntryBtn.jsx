import Cookies from 'js-cookie';
import * as styled from './EntryBtnStyled';
import { useNavigate } from 'react-router-dom';

const EntryBtn = ({ value, colored, link }) => {
  const navigate = useNavigate();
  function auth() {
    Cookies.set('token', 'value');
    navigate(link, { replace: true });
  }
  return (
    <styled.Btn onClick={auth} $colored={colored}>
      {value}
    </styled.Btn>
  );
};

export default EntryBtn;
