import React, { useState } from "react";
import "./PhotoViewer.css";
import PhotoList from "./PhotoList";
import MainPhoto from "./MainPhoto";
import photoUrlList from "./photoUrlList";

const PhotoViewer = () => {
  const [selectedThumbnailId, setSelectedThumbnailId] = useState(0);

  return (
    <div>
      <MainPhoto url={photoUrlList[selectedThumbnailId]} />
      <PhotoList
        photoUrlList={photoUrlList}
        onSelectThumbnailId={setSelectedThumbnailId}
        selectedThumbnailId={selectedThumbnailId}
      />
    </div>
  );
};

export default PhotoViewer;
