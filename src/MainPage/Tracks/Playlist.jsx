import * as styled from './TracksStyled';
import Tracks__SearchFilter from './TracksSearchFilter/TracksSearchFilter';
import Tracks__List from './TracksList/TracksList';
import { fakeStateList } from 'helpers/fakeStateList';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
const Playlist = ({ heading = 'Треки' }) => {
  const params = useParams();
  if(isNaN(Number(params.id))){
    return <NotFound />
  }
  const playlistTitle = fakeStateList[Number(params.id)].title
  const tracksData = fakeStateList[Number(params.id)].items
  return (
    <main className="TracksContainer">
      <styled.heading>{playlistTitle}</styled.heading>
      <Tracks__List tracksData={tracksData} />
    </main>
  );
};

export default Playlist;
