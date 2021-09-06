import React, { useState } from "react";
import "./PhotoViewer.css";
import PhotoList from "./PhotoList";
import MainPhoto from "./MainPhoto";

const brokenImages = [1, 24, 32, 36, 44, 47];
const numImages = 50;

const imageUrlList = [...Array(numImages).keys()]
  .filter(i => !brokenImages.includes(i))
  .map(i => `https://picsum.photos/id/6${i.toString().padStart(2, "0")}/1600/900.jpg`);

export const PhotoViewer = () => {
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  return (
    <div>
      <MainPhoto url={imageUrlList[selectedThumbnail]} onChangePhoto={setSelectedThumbnail} />
      <PhotoList
        imageUrlList={imageUrlList}
        onSelectThumbnail={setSelectedThumbnail}
        selectedThumbnail={selectedThumbnail}
      />
    </div>
  );
};
