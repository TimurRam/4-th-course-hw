import * as styled from './TracksStyled';
import Tracks__SearchFilter from './TracksSearchFilter/TracksSearchFilter';
import Tracks__List from './TracksList/TracksList';

const Tracks = ({ heading = 'Треки',tracksData }) => {
  return (
    <main className="TracksContainer">
      <styled.heading>{heading}</styled.heading>
      <Tracks__SearchFilter />
      <Tracks__List tracksData={tracksData}/>
    </main>
  );
};

export default Tracks;
