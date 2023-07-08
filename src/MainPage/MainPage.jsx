import * as styled from './MainPageStyled';
import Header from './Header/Header';
import MainNav from './MainNav/MainNav';
import Tracks from './Tracks/Tracks';
import Sidebar from './Sidebar/Sidebar';
import MusicPlayer from './MusicPlayer/MusicPlayer';

const MainPage = () => {
  return (
    <styled.wrapper>
      <Header />
      <MainNav />
      <Tracks />
      <Sidebar />
      <MusicPlayer />
    </styled.wrapper>
  );
};

export default MainPage;
