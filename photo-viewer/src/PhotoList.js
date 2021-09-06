import React from "react";
import PhotoThumbnail from "./PhotoThumbnail";

const PhotoList = ({ onSelectThumbnail, photoUrlList, selectedThumbnail }) => (
  <ul className="photo-grid">
    {photoUrlList.map((url, i) => (
      <PhotoThumbnail
        url={url}
        id={i}
        onSelectThumbnail={onSelectThumbnail}
        selectedThumbnail={selectedThumbnail}
      />
    ))}
  </ul>
);

export default PhotoList;
