import * as styled from './MainNavLinkStyled';
import { Link } from 'react-router-dom';

const MainNavLink = ({ linkName, link, logout }) => {
  return (
    <styled.navLink>
      <Link onClick={logout} to={link} className="menu__link">
        {linkName}
      </Link>
    </styled.navLink>
  );
};

export default MainNavLink;
