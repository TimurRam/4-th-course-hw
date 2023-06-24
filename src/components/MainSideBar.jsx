import playListOne from '../img/playlist01.png';
import playListTwo from '../img/playlist02.png';
import playListThree from '../img/playlist03.png';

function SideBarPersonal() {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">Sergey.Ivanov</p>
      <div className="sidebar__avatar" />
    </div>
  );
}
function SidebarBlock() {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <div className="sidebar__item">
          <a className="sidebar__link" href="//">
            <img
              className="sidebar__img"
              src={playListOne}
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="//">
            <img
              className="sidebar__img"
              src={playListTwo}
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="//">
            <img
              className="sidebar__img"
              src={playListThree}
              alt="day's playlist"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
function MainSidebar() {
  return (
    <div className="main__sidebar sidebar">
      <SideBarPersonal />
      <SidebarBlock />
    </div>
  );
}

export default MainSidebar;
