import * as styled from './EntryFormStyled';
import logo_black from './logo_black.svg';
import EntryBtn from './EntryBtn/EntryBtn';
import EntryInput from './EntryInput/EntryInput';

const EntryForm = () => {
  return (
    <styled.center>
      <styled.form>
        <styled.logo src={logo_black} alt="logo" />
        <styled.inputsList>
          <li>
            <EntryInput placeholder="Логин" />
          </li>
          <li>
            <EntryInput placeholder="Пароль" />
          </li>
        </styled.inputsList>
        <styled.btnContainer>
          <EntryBtn value="Войти" colored={true} />
          <EntryBtn value="Зарегистрироваться" colored={false} />
        </styled.btnContainer>
      </styled.form>
    </styled.center>
  );
};

export default EntryForm;
