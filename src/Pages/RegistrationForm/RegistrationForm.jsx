import * as styled from './EntryFormStyled';
import logo_black from './logo_black.svg';
import EntryBtn from './EntryBtn/EntryBtn';
import EntryInput from './EntryInput/EntryInput';
import EntryPassword from './EntryInput/EntryPassword';

const RegistrationForm = () => {
  return (
    <styled.center>
      <styled.form>
        <styled.logo src={logo_black} alt="logo" />
        <styled.inputsList>
          <li>
            <EntryInput placeholder="Логин" />
          </li>
          <li>
            <EntryPassword placeholder="Пароль" />
          </li>
          <li>
            <EntryPassword placeholder="Повторите пароль" />
          </li>
        </styled.inputsList>
        <styled.btnContainer>
          <EntryBtn value="Зарегистрироваться" colored={true} />
        </styled.btnContainer>
      </styled.form>
    </styled.center>
  );
};

export default RegistrationForm;
