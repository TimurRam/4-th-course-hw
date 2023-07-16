import sprite from 'img/icon/sprite.svg';
import * as styled from './HeaderSidebarStyled';

const HeaderSidebar = () => {
  return (
    <styled.sidebarPersonalContainer>
      <p>Name</p>
      <styled.logout>
        <use xlinkHref={`${sprite}#icon-logout`} />
      </styled.logout>
    </styled.sidebarPersonalContainer>
  );
};

export default HeaderSidebar;
