import * as styled from './TracksListStyled';
import Tracks__ListHead from '../TracksListHead/TracksListHead';
import Tracks__Track from '../TracksTrack/TracksTrack';
import { fakeStateList } from 'helpers/fakeStateList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TracksList = () => {
  // Вешает класс loading на три секунды, а затем убирает его
  const [loadingClass, setLoadingClass] = useState('loading');
  useEffect(() => {
    setTimeout(setLoadingClass, 3000, '');
  });

  const trackElements = fakeStateList[0].items.map((track) => (
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
