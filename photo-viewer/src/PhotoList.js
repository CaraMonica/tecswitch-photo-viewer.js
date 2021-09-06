import React from "react";
import PhotoThumbnail from "./PhotoThumbnail";

const PhotoList = ({ onSelectThumbnail, photoUrlList, selectedThumbnailId }) => (
  <ul className="photo-grid">
    {photoUrlList.map((url, i) => (
      <PhotoThumbnail
        url={url}
        id={i}
        onSelectThumbnail={onSelectThumbnail}
        selectedThumbnailId={selectedThumbnailId}
      />
    ))}
  </ul>
);

export default PhotoList;
