import * as styled from './SidebarStyled';
import Sidebar__Item from './SidebarItem/SidebarItem';
import playlist01 from 'img/playlist01.png';
import playlist02 from 'img/playlist02.png';
import playlist03 from 'img/playlist03.png';
import { Link } from 'react-router-dom';

const Sidebar = ({loadingClass}) => {
 
console.log(loadingClass);

  return (
    <styled.sideBar>
      <Link to="/playlist/0">
        <Sidebar__Item
          img={playlist01}
          description="day's playlist"
          loadingClass={loadingClass}
        />
      </Link>
      <Link to="/playlist/1">
        <Sidebar__Item
          img={playlist02}
          description="
100 dance hits"
          loadingClass={loadingClass}
        />
      </Link>
      <Link to="/playlist/2">
        <Sidebar__Item
          img={playlist03}
          description="indie charge"
          loadingClass={loadingClass}
        />
      </Link>
    </styled.sideBar>
  );
};

export default Sidebar;
