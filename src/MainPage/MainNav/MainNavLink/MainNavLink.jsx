import * as styled from './MainNavLinkStyled';
import { Link } from 'react-router-dom';

const MainNavLink = ({ linkName, link }) => {
  return (
    <styled.navLink>
      <Link to={link} className="menu__link">
        {linkName}
      </Link>
    </styled.navLink>
  );
};

export default MainNavLink;
