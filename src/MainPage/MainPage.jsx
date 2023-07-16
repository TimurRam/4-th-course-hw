import * as styled from './MainPageStyled';
import Header from './Header/Header';
import MainNav from './MainNav/MainNav';
import Tracks from './Tracks/Tracks';
import Sidebar from './Sidebar/Sidebar';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import { Route, Routes } from 'react-router-dom';
import Playlist from './Tracks/Playlist';
import { fakeState } from 'helpers/fakeState';
import NotFound from './Tracks/NotFound';
import Favorites from './Tracks/Favorites';

const MainPage = () => {
  return (
    <styled.wrapper>
      <Header />
      <MainNav />
      <Routes>
        <Route path="/" element={<Tracks tracksData={fakeState} />} />
        <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="/*" element={<NotFound />} />
        <Route path='/favorites' element={<Favorites />} />

        {/* <Tracks/> */}
      </Routes>
      <Sidebar />
      <MusicPlayer />
    </styled.wrapper>
  );
};

export default MainPage;
