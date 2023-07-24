import * as styled from './TracksListStyled';
import Tracks__ListHead from '../TracksListHead/TracksListHead';
import Tracks__Track from '../TracksTrack/TracksTrack';
import { fakeState } from 'helpers/fakeState';
import { useEffect, useState } from 'react';

const TracksList = ({tracksData}) => {
  // Вешает класс loading на три секунды, а затем убирает его
  const [loadingClass, setLoadingClass] = useState('loading');
  useEffect(() => {
    setTimeout(setLoadingClass, 3000, '');
  });

  const trackElements = tracksData.map((track) => (
    <Tracks__Track
      key={track.id}
      logo={track.logo}
      name={track.name}
      author={track.author}
      album={track.album}
      duration={track.duration_in_seconds}
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
