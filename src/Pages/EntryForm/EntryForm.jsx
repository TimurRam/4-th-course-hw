import * as styled from './EntryFormStyled';
import logo_black from './logo_black.svg';
import EntryBtn from './EntryBtn/EntryBtn';
import EntryInput from './EntryInput/EntryInput';
import EntryPassword from 'Pages/RegistrationForm/EntryInput/EntryPassword';

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
            <EntryPassword placeholder="Пароль" />
          </li>
        </styled.inputsList>
        <styled.btnContainer>
          <EntryBtn value="Войти" colored={true} link='/' />
          <EntryBtn value="Зарегистрироваться" colored={false} link='/registration' />
        </styled.btnContainer>
      </styled.form>
    </styled.center>
  );
};

export default EntryForm;
