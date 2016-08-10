import React from 'react';
import Album from './Album';
import styles from './../styles.css';

const AlbumList = (props) => {
  const albums = props.albums.map((album) =>
    <Album key={album.id} album={album} getTracks={props.getTracks} />);

  return (
    <div className="albumList col-md-4">
      <ul className="albumListUl">
        {albums}
      </ul>
    </div>
  );
};

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired,
  getTracks: React.PropTypes.func.isRequired,
};

export default AlbumList;
