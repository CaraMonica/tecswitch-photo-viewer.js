import React from "react";

const PhotoThumbnail = ({ url, id, onSelectThumbnail, selectedThumbnailId }) => (
  <li className="grid-photo-container" key={id}>
    <img
      src={url}
      alt="thumbnail"
      id={`thumbnail${id}`}
      className={`grid-photo${selectedThumbnailId === id ? " selected" : ""}`}
      onClick={() => {
        onSelectThumbnail(id);
      }}
    />
  </li>
);

export default PhotoThumbnail;
