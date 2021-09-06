import React from "react";

const PhotoThumbnail = ({ url, id, onSelectThumbnail, selectedThumbnail }) => (
  <li className="grid-photo-container" key={id}>
    <img
      src={url}
      alt="thumbnail"
      id={`thumbnail${id}`}
      className={`grid-photo${parseInt(selectedThumbnail) === id ? " selected" : ""}`}
      onClick={() => {
        onSelectThumbnail(id);
      }}
    />
  </li>
);

export default PhotoThumbnail;
