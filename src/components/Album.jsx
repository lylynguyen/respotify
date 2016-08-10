import React from 'react';
import styles from './../styles.css';

const Album = (props) => {
  return (
    <li>
      <img 
      src={props.album.images[1].url} 
      alt={props.album.name}
      className="albumImg"
      onClick={() => props.getTracks(props.album.id)}
      />
    </li>
  )
}

Album.propTypes = {
  album: React.PropTypes.object.isRequired,
  getTracks: React.PropTypes.func.isRequired,
};

export default Album;
