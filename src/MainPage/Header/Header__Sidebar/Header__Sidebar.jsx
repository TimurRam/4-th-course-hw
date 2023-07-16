import sprite from 'img/icon/sprite.svg';
import * as styled from './Header__SidebarStyled';

const Header__Sidebar = () => {
  return (
    <styled.sidebarPersonalContainer>
      <p>Name</p>
      <styled.logout>
        <use xlinkHref={`${sprite}#icon-logout`} />
      </styled.logout>
    </styled.sidebarPersonalContainer>
  );
};

export default Header__Sidebar;
