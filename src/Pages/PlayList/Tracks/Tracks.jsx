import * as styled from './TracksStyled';
import Tracks__SearchFilter from './TracksSearchFilter/TracksSearchFilter';
import Tracks__List from './TracksList/TracksList';
import { fakeStateList } from 'helpers/fakeStateList';

const Tracks = ({ heading }) => {
  return (
    <main className="TracksContainer">
      <styled.heading>{heading}</styled.heading>
      <Tracks__SearchFilter />
      <Tracks__List/>
    </main>
  );
};

export default Tracks;
