import * as styled from '../MainPage/Tracks/TracksStyled';
import Tracks__List from '../MainPage/Tracks/TracksList/TracksList';
import { fakeStateList } from 'helpers/fakeStateList';

const Favorites = () => {
  const playlistTitle = fakeStateList[3].title;
  const tracksData = fakeStateList[3].items;
  return (
    <main className="TracksContainer">
      <styled.heading>{playlistTitle}</styled.heading>
      <Tracks__List tracksData={tracksData} />
    </main>
  );
};

export default Favorites;
