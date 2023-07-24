import * as styled from './TracksListStyled';
import Tracks__ListHead from '../TracksListHead/TracksListHead';
import Tracks__Track from '../TracksTrack/TracksTrack';
import { useEffect, useState } from 'react';

const TracksList = ({
  getError,
  tracksData,
  setCurrentTrack,
  setInvisible,
  loadingClass,
}) => {
  const trackElements = tracksData.map((track) => (
    <Tracks__Track
    getError={getError}
      track={track}
      setInvisible={setInvisible}
      setCurrentTrack={setCurrentTrack}
      key={track.id}
      loadingClass={loadingClass}
    />
  ));
if(getError){
  return(
    <h1>{getError}</h1>
  )
}
  return (
    <styled.trackList>
      <Tracks__ListHead />
      {trackElements}
    </styled.trackList>
  );
};

export default TracksList;
