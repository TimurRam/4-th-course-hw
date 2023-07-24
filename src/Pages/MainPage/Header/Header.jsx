import * as styled from './HeaderStyled';
import logo from '../../../img/logo.png';
import Header__Search from './HeaderSearch/HeaderSearch';
import Header__Sidebar from './HeaderSidebar/HeaderSidebar';

const Header = () => {
  return (
    <styled.header>
      <styled.logoContainer>
        <styled.logo src={logo} />
      </styled.logoContainer>
      <Header__Search />
      <Header__Sidebar />
    </styled.header>
  );
};

export default Header;
