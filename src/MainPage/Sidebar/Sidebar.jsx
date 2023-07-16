import * as styled from './SidebarStyled';
import Sidebar__Item from './SidebarItem/SidebarItem';
import playlist01 from 'img/playlist01.png';
import playlist02 from 'img/playlist02.png';
import playlist03 from 'img/playlist03.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // Вешает класс loading на три секунды, а затем убирает его
  const [loadingClass, setLoadingClass] = useState('loading');
  useEffect(() => {
    setTimeout(setLoadingClass, 3000, '');
  });

  return (
    <styled.sideBar>
      <Link to="/playlist/1">
        <Sidebar__Item
          img={playlist01}
          description="day's playlist"
          loadingClass={loadingClass}
        />
      </Link>
      <Link to="/playlist/2">
        <Sidebar__Item
          img={playlist02}
          description="
100 dance hits"
          loadingClass={loadingClass}
        />
      </Link>
      <Link to="/playlist/3">
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
