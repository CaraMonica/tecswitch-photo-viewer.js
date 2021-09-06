import React from "react";

const PhotoThumbnail = ({ url, id, onSelectThumbnail, selectedThumbnail }) => (
  <img
    src={url}
    alt=""
    id={`thumbnail${id}`}
    className={`grid-img${parseInt(selectedThumbnail) === id ? " selected" : ""}`}
    onClick={() => onSelectThumbnail(id)}
  />
);

export default PhotoThumbnail;
