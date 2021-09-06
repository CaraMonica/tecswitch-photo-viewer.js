import React, { useState } from "react";
import "./PhotoViewer.css";
import PhotoList from "./PhotoList";
import MainPhoto from "./MainPhoto";
import photoUrlList from "./photoUrlList";

const PhotoViewer = () => {
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  return (
    <div>
      <MainPhoto url={photoUrlList[selectedThumbnail]} />
      <PhotoList
        photoUrlList={photoUrlList}
        onSelectThumbnail={setSelectedThumbnail}
        selectedThumbnail={selectedThumbnail}
      />
    </div>
  );
};

export default PhotoViewer;
