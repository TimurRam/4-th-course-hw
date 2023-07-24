import * as styled from './TracksListStyled';
import Tracks__ListHead from '../TracksListHead/TracksListHead';
import Tracks__Track from '../TracksTrack/TracksTrack';
import { useEffect, useState } from 'react';


const TracksList = ({ tracksData, setCurrentTrack, setInvisible,loadingClass }) => {
  // Вешает класс loading на три секунды, а затем убирает его
  // const [loadingClass, setLoadingClass] = useState('loading');
  // console.log(loadingClass);
  // useEffect(() => {
  //   setTimeout(setLoadingClass, 3000, '');
  // });

  const trackElements = tracksData.map((track) => (
    <Tracks__Track
    
      track={track}
      setInvisible={setInvisible}
      setCurrentTrack={setCurrentTrack}
      key={track.id}
      loadingClass={loadingClass}
    />
  ));

  return (
    <styled.trackList>
      <Tracks__ListHead />
      {trackElements}
    </styled.trackList>
  );
};

export default TracksList;
