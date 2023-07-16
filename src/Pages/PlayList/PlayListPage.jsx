import * as styled from './PlayListPageStyled';
import Header from '../../MainPage/Header/Header';
import MainNav from '../../MainPage/MainNav/MainNav';
import Tracks from '../PlayList/Tracks/Tracks';
import Sidebar from '../../MainPage/Sidebar/Sidebar';
import MusicPlayer from '../../MainPage/MusicPlayer/MusicPlayer';
import { useParams } from 'react-router-dom';
import { fakeStateList } from 'helpers/fakeStateList';
const PlayListPage = () => {
  const params = useParams();
  const playlist = fakeStateList[params.id].items;
  console.log(playlist);
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

export default PlayListPage;
