import * as styled from './TracksStyled';
import Tracks__SearchFilter from './Tracks__SearchFilter/Tracks__SearchFilter';
import Tracks__List from './Tracks__List/Tracks__List';

const Tracks = ({ heading = 'Треки' }) => {
  return (
    <main className="TracksContainer">
      <styled.heading>{heading}</styled.heading>
      <Tracks__SearchFilter />
      <Tracks__List />
    </main>
  );
};

export default Tracks;
