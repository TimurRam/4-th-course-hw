import * as styled from './MainPageStyled';
import Header from './Header/Header';
import MainNav from './MainNav/MainNav';
import Tracks from './Tracks/Tracks';
import Sidebar from './Sidebar/Sidebar';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import { Route, Routes } from 'react-router-dom';
import Playlist from '../Playlist/Playlist';
import { NotFound } from '../NotFoundPage/NotFound';
import Favorites from '../Favorites/Favorites';
import { getPlaylist } from 'API/Api';
import { useEffect, useState } from 'react';
import { fakeState } from 'helpers/fakeState';
const MainPage = () => {
  const [playlist, setPlaylist] = useState(fakeState);
  const [currentTrack, setCurrentTrack] = useState({
    author: '',
    name: '',
    track_file: '',
  });
  const [invisible, setInvisible] = useState(false);
  const [loadingClass, setLoadingClass] = useState('loading');
const [getError, setGetError] = useState(null)
  useEffect(() => {
    getPlaylist().then((playlist) => {
      setPlaylist(playlist);
      setLoadingClass(null);
    }).catch(error => {setGetError(error.message)})
  }, []);

  return (
    <styled.wrapper>
      <Header />
      <MainNav />
      <Routes>
        <Route
          path="/"
          element={
            <Tracks
            getError={getError}
              loadingClass={loadingClass}
              tracksData={playlist}
              setCurrentTrack={setCurrentTrack}
              setInvisible={setInvisible}
            />
          }
        />
        <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/favorites" element={<Favorites />} />

        {/* <Tracks/> */}
      </Routes>
      <Sidebar loadingClass={loadingClass} />
      <MusicPlayer currentTrack={currentTrack} invisible={invisible} />
    </styled.wrapper>
  );
};

export default MainPage;
