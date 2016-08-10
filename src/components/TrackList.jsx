import React from 'react';
import Track from './Track';
import styles from './../styles.css';

const TrackList = (props) => {
  const tracks = props.tracks.map((track) =>
    <Track key={track.id} track={track} playPreview={props.playPreview} />);

  return (
    <div className="col-md-3">
      <ul className="trackListUl">
        {tracks}
      </ul>
    </div>
  );
};

TrackList.propTypes = {
  tracks: React.PropTypes.array.isRequired,
  playPreview: React.PropTypes.func.isRequired,
};

export default TrackList;
