import * as styled from './MainNavLinkStyled';

const MainNavLink = ({ linkName }) => {
  return (
    <styled.navLink>
      <a href="http://" className="menu__link">
        {linkName}
      </a>
    </styled.navLink>
  );
};

export default MainNavLink;
