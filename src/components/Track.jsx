import React from 'react';
import styles from './../styles.css';

const mouseOverColor = '#ADD8E6';
const mouseOutColor = 'white';

const Track = (props) => {
  return (
    <li
      className="trackLi"
      onMouseOver={(e) => { e.target.style.backgroundColor = mouseOverColor; }}
      onMouseOut={(e) => { e.target.style.backgroundColor = mouseOutColor; }}
      onClick={() => props.playPreview(props.track.preview_url)}
    >
      {props.track.name}
    </li>
  );
};

Track.propTypes = {
  track: React.PropTypes.object.isRequired,
  playPreview: React.PropTypes.func.isRequired,
};

export default Track;
