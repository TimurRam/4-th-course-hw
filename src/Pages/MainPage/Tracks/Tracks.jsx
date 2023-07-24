import * as styled from './TracksStyled';
import Tracks__SearchFilter from './TracksSearchFilter/TracksSearchFilter';
import Tracks__List from './TracksList/TracksList';

const Tracks = ({ heading = 'Треки',tracksData, setCurrentTrack, setInvisible, loadingClass}) => {


  return (
    <main className="TracksContainer">
      <styled.heading>{heading}</styled.heading>
      
      <Tracks__SearchFilter />
      <Tracks__List 
      loadingClass={loadingClass}
      setInvisible={setInvisible}
      setCurrentTrack={setCurrentTrack}
      tracksData={tracksData}/>
    </main>
  );
};

export default Tracks;